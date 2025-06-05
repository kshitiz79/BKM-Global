import React from 'react';

// Sample data
const ticketsData = [
  {
    ticketId: "TICKET-001",
    userName: "John Doe",
    subject: "Issue with Deposit",
    status: "Open",
    priority: "High",
    dateCreated: "2025-05-30",
    lastUpdated: "2025-06-04"
  },
  {
    ticketId: "TICKET-002",
    userName: "Sarah Smith",
    subject: "Withdrawal Delay",
    status: "In Progress",
    priority: "Medium",
    dateCreated: "2025-05-28",
    lastUpdated: "2025-06-03"
  },
  {
    ticketId: "TICKET-003",
    userName: "Michael Brown",
    subject: "Account Verification",
    status: "Closed",
    priority: "Low",
    dateCreated: "2025-05-25",
    lastUpdated: "2025-06-01"
  },
  {
    ticketId: "TICKET-004",
    userName: "Emily Davis",
    subject: "Platform Error",
    status: "Open",
    priority: "High",
    dateCreated: "2025-06-02",
    lastUpdated: "2025-06-05"
  }
];

const AllTickets = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">All Tickets</h2>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-blue-800 font-semibold">Ticket ID</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">User Name</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Subject</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Status</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Priority</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Date Created</th>
              <th className="py-3 px-4 text-blue-800 font-semibold">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData.map((ticket, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{ticket.ticketId}</td>
                <td className="py-3 px-4">{ticket.userName}</td>
                <td className="py-3 px-4">{ticket.subject}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ticket.status === 'Open'
                        ? 'bg-red-100 text-red-800'
                        : ticket.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ticket.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : ticket.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="py-3 px-4">{ticket.dateCreated}</td>
                <td className="py-3 px-4">{ticket.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;