import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('appointments');

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      fetchData(storedToken);
    }
  }, []);

  const fetchData = async (authToken) => {
    try {
      const config = { headers: { Authorization: `Bearer ${authToken}` } };
      const [appointmentsRes, doctorsRes] = await Promise.all([
        axios.get(`${API_URL}/api/appointments`, config),
        axios.get(`${API_URL}/api/doctors`)
      ]);
      setAppointments(appointmentsRes.data);
      setDoctors(doctorsRes.data);
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/api/admin/login`, loginData);
      const { token: newToken } = response.data;
      setToken(newToken);
      localStorage.setItem('adminToken', newToken);
      setIsAuthenticated(true);
      fetchData(newToken);
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setToken('');
  };

  const handleExportCSV = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/appointments/export`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'appointments.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Failed to export CSV');
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout title="Admin Login - Ruthvik Hospitals">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto card">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="input-field"
                />
              </div>
              <button type="submit" disabled={loading} className="w-full btn-primary">
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Admin Dashboard - Ruthvik Hospitals">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn-secondary">
            Logout
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-6 py-2 rounded-lg ${activeTab === 'appointments' ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}
          >
            Appointments ({appointments.length})
          </button>
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-6 py-2 rounded-lg ${activeTab === 'doctors' ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}
          >
            Doctors ({doctors.length})
          </button>
        </div>

        {activeTab === 'appointments' && (
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Appointments</h2>
              <button onClick={handleExportCSV} className="btn-primary">
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Patient</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Doctor</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => (
                    <tr key={apt._id} className="border-t">
                      <td className="px-4 py-2">{apt.fullName}</td>
                      <td className="px-4 py-2">{apt.phone}</td>
                      <td className="px-4 py-2">{apt.approachingDoctor?.name}</td>
                      <td className="px-4 py-2">
                        {apt.preferredDate ? new Date(apt.preferredDate).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                          apt.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          apt.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Doctors</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Specialty</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doc) => (
                    <tr key={doc._id} className="border-t">
                      <td className="px-4 py-2 font-medium">{doc.name}</td>
                      <td className="px-4 py-2">{doc.specialty}</td>
                      <td className="px-4 py-2">{doc.phone}</td>
                      <td className="px-4 py-2">{doc.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
