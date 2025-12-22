import { createContext, useContext, useState, useEffect } from 'react';

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('approachingDoctor');
    if (stored) {
      try {
        setSelectedDoctor(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored doctor:', e);
      }
    }
  }, []);

  // Save to localStorage when changed
  const selectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    if (doctor) {
      localStorage.setItem('approachingDoctor', JSON.stringify(doctor));
    } else {
      localStorage.removeItem('approachingDoctor');
    }
  };

  return (
    <DoctorContext.Provider value={{ selectedDoctor, selectDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
}

export function useDoctor() {
  const context = useContext(DoctorContext);
  if (!context) {
    throw new Error('useDoctor must be used within DoctorProvider');
  }
  return context;
}
