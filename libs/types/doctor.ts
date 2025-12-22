export interface Doctor {
  _id: string;
  name: string;
  qualifications: string;
  specialty: string;
  phone: string;
  email: string;
  photoUrl: string;
  availability: {
    weekdays: string[];
    slots: string[];
  };
  createdAt: Date;
}

export interface ApproachingDoctor {
  doctorId: string;
  name: string;
  phone: string;
  specialty: string;
}

export interface Appointment {
  _id?: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredDate?: Date;
  preferredTime?: string;
  approachingDoctor: ApproachingDoctor;
  reasonForVisit?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: Date;
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt?: Date;
}
