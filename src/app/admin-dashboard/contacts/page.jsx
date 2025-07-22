"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaFilter, FaDownload, FaSearch, FaCalendar, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    source: 'all',
    search: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({});
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchContacts();
  }, [filters]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: filters.page,
        limit: filters.limit,
        ...(filters.status !== 'all' && { status: filters.status }),
        ...(filters.source !== 'all' && { source: filters.source })
      });

      const response = await fetch(`http://localhost:8000/api/contact?${queryParams}`);
      const result = await response.json();

      if (result.success) {
        let filteredContacts = result.data;
        
        // Apply search filter on frontend
        if (filters.search) {
          filteredContacts = filteredContacts.filter(contact =>
            contact.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            contact.email.toLowerCase().includes(filters.search.toLowerCase()) ||
            contact.subject.toLowerCase().includes(filters.search.toLowerCase())
          );
        }

        setContacts(filteredContacts);
        setPagination(result.pagination);
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Fetch contacts error:', error);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (contactId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/api/contact/${contactId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        // Update local state
        setContacts(contacts.map(contact =>
          contact._id === contactId ? { ...contact, status: newStatus } : contact
        ));
        if (selectedContact && selectedContact._id === contactId) {
          setSelectedContact({ ...selectedContact, status: newStatus });
        }
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Status update error:', error);
      alert('Failed to update status');
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value, page: 1 });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceColor = (source) => {
    switch (source) {
      case 'home-page': return 'bg-purple-100 text-purple-800';
      case 'contact-page': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Subject', 'Service', 'Status', 'Source', 'Date'],
      ...contacts.map(contact => [
        contact.name,
        contact.email,
        contact.phone,
        contact.subject,
        contact.service || 'N/A',
        contact.status,
        contact.source,
        new Date(contact.createdAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
        <p className="text-gray-600">Manage and respond to customer inquiries</p>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>

          {/* Source Filter */}
          <select
            value={filters.source}
            onChange={(e) => handleFilterChange('source', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Sources</option>
            <option value="home-page">Home Page</option>
            <option value="contact-page">Contact Page</option>
          </select>

          {/* Export Button */}
          <button
            onClick={exportToCSV}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <FaDownload className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{contacts.length}</div>
            <div className="text-sm text-blue-600">Total Contacts</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {contacts.filter(c => c.status === 'new').length}
            </div>
            <div className="text-sm text-yellow-600">New</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {contacts.filter(c => c.status === 'resolved').length}
            </div>
            <div className="text-sm text-green-600">Resolved</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {contacts.filter(c => c.source === 'home-page').length}
            </div>
            <div className="text-sm text-purple-600">From Home</div>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaUser className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaEnvelope className="w-3 h-3 mr-1" />
                          {contact.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaPhone className="w-3 h-3 mr-1" />
                          {contact.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{contact.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{contact.service || 'N/A'}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={contact.status}
                      onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full border-0 ${getStatusColor(contact.status)}`}
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSourceColor(contact.source)}`}>
                      {contact.source.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendar className="w-3 h-3 mr-1" />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setSelectedContact(contact);
                        setShowModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                    >
                      <FaEye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => handleFilterChange('page', Math.max(1, filters.page - 1))}
                disabled={filters.page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => handleFilterChange('page', Math.min(pagination.pages, filters.page + 1))}
                disabled={filters.page === pagination.pages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing page <span className="font-medium">{pagination.current}</span> of{' '}
                  <span className="font-medium">{pagination.pages}</span> ({pagination.total} total)
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handleFilterChange('page', page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        page === filters.page
                          ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedContact.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedContact.service || 'N/A'}</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedContact.subject}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded-lg">
                    {selectedContact.message}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <label className="block font-medium text-gray-700">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedContact.status)}`}>
                      {selectedContact.status}
                    </span>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">Source</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSourceColor(selectedContact.source)}`}>
                      {selectedContact.source.replace('-', ' ')}
                    </span>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">Date</label>
                    <p className="text-gray-900">{new Date(selectedContact.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;