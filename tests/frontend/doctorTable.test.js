import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DoctorTable from '../../apps/frontend/components/DoctorTable';
import { DoctorProvider } from '../../apps/frontend/context/DoctorContext';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

const mockDoctors = [
  {
    _id: '1',
    name: 'Dr. John Smith',
    qualifications: 'MBBS, MD',
    specialty: 'Cardiology',
    phone: '+911234567890',
    email: 'john@example.com',
    photoUrl: '/images/dr1.jpg',
    availability: { weekdays: ['Mon', 'Wed'], slots: ['10:00'] }
  },
  {
    _id: '2',
    name: 'Dr. Jane Doe',
    qualifications: 'MBBS, MS',
    specialty: 'Orthopaedics',
    phone: '+911234567891',
    email: 'jane@example.com',
    photoUrl: '/images/dr2.jpg',
    availability: { weekdays: ['Tue', 'Thu'], slots: ['14:00'] }
  }
];

describe('DoctorTable Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders doctor table with all doctors', () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    expect(screen.getByText('Dr. John Smith')).toBeInTheDocument();
    expect(screen.getByText('Dr. Jane Doe')).toBeInTheDocument();
  });

  it('allows selecting a doctor as approaching doctor', async () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const radioButtons = screen.getAllByRole('radio');
    fireEvent.click(radioButtons[0]);

    await waitFor(() => {
      expect(screen.getByText(/Approaching Doctor Selected/i)).toBeInTheDocument();
      expect(screen.getByText(/Dr. John Smith/)).toBeInTheDocument();
    });
  });

  it('persists selected doctor to localStorage', async () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const radioButtons = screen.getAllByRole('radio');
    fireEvent.click(radioButtons[0]);

    await waitFor(() => {
      const stored = localStorage.getItem('approachingDoctor');
      expect(stored).toBeTruthy();
      const parsed = JSON.parse(stored);
      expect(parsed.name).toBe('Dr. John Smith');
      expect(parsed.doctorId).toBe('1');
    });
  });

  it('filters doctors by search term', () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const searchInput = screen.getByPlaceholderText(/Search by doctor name/i);
    fireEvent.change(searchInput, { target: { value: 'John' } });

    expect(screen.getByText('Dr. John Smith')).toBeInTheDocument();
    expect(screen.queryByText('Dr. Jane Doe')).not.toBeInTheDocument();
  });

  it('filters doctors by specialty', () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const specialtySelect = screen.getByLabelText(/Filter by specialty/i);
    fireEvent.change(specialtySelect, { target: { value: 'Cardiology' } });

    expect(screen.getByText('Dr. John Smith')).toBeInTheDocument();
    expect(screen.queryByText('Dr. Jane Doe')).not.toBeInTheDocument();
  });

  it('only allows one doctor to be selected at a time', async () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const radioButtons = screen.getAllByRole('radio');
    
    fireEvent.click(radioButtons[0]);
    await waitFor(() => {
      expect(radioButtons[0]).toBeChecked();
      expect(radioButtons[1]).not.toBeChecked();
    });

    fireEvent.click(radioButtons[1]);
    await waitFor(() => {
      expect(radioButtons[0]).not.toBeChecked();
      expect(radioButtons[1]).toBeChecked();
    });
  });

  it('has accessible labels for radio buttons', () => {
    render(
      <DoctorProvider>
        <DoctorTable doctors={mockDoctors} />
      </DoctorProvider>
    );

    const radio1 = screen.getByLabelText(/Select Dr. John Smith as approaching doctor/i);
    const radio2 = screen.getByLabelText(/Select Dr. Jane Doe as approaching doctor/i);

    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
  });
});
