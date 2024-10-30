"use client";
const UserManagement = () => {
  // Demo data for users
  const users = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      registrationDate: "2023-10-01T10:00:00Z",
      isActive: true
    },
    {
      _id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      registrationDate: "2023-10-15T14:30:00Z",
      isActive: false
    },
    {
      _id: "3",
      name: "Michael Brown",
      email: "michael@example.com",
      registrationDate: "2023-10-20T09:15:00Z",
      isActive: true
    },
    {
      _id: "4",
      name: "Emily Davis",
      email: "emily@example.com",
      registrationDate: "2023-10-28T12:45:00Z",
      isActive: true
    }
  ];

  const handleActivate = (id: string) => {
    // Logic to activate the user (e.g., update user status)
    console.log(`Activating user with ID: ${id}`);
  };

  const handleDeactivate = (id: string) => {
    // Logic to deactivate the user (e.g., update user status)
    console.log(`Deactivating user with ID: ${id}`);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 min-h-[70vh] py-8">
      <h2 className="text-3xl font-semibold mb-8">User Management</h2>

      {/* User List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#2499EF] text-white">
            <tr>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Registration Date</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">
                  {new Date(user.registrationDate).toLocaleString()}
                </td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${
                      user.isActive ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  {/* Activate/Deactivate */}
                  {!user.isActive ? (
                    <button
                      onClick={() => handleActivate(user._id)}
                      className="bg-green-800 text-white px-3 py-1 rounded-md mr-2"
                    >
                      Activate
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDeactivate(user._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                    >
                      Deactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
