"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useGetAllUserQuery } from "@/redux/features/auth/authApi";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  isDeleted: boolean;
  role: "Admin" | "User";
}

const UserManagement: React.FC = () => {
  const token = Cookies.get("token");
  const { data: usersData, isLoading, isError } = useGetAllUserQuery(token);

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    _id: "",
    name: "",
    email: "",
    phone: "",
    isDeleted: true,
    role: "User"
  });

  const users = usersData?.data || [];

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    setShowAddUserModal(false);
  };

  const handleEditUser = (e: React.FormEvent) => {
    e.preventDefault();

    setShowEditUserModal(false);
  };

  const handleDeleteUser = (id: string) => {
    console.log(id);
  };

  const openEditUserModal = (user: User) => {
    setNewUser(user);
    setShowEditUserModal(true);
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <div className="max-w-screen-2xl mx-auto px-8 min-h-[70vh] py-8">
      <div className="mb-8 flex flex-wrap justify-between">
        <h2 className="text-3xl font-semibold">User Management</h2>
        <button
          onClick={() => setShowAddUserModal(true)}
          className="bg-[#2499EF] text-white px-4 py-2 mt-6 lg:mt-0 rounded-md"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="overflow-x-scroll">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#2499EF] text-white">
            <tr>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User) => (
              <tr key={user._id}>
                <td className="px-4 py-2 border">{user?.name}</td>
                <td className="px-4 py-2 border">{user?.email}</td>
                <td className="px-4 py-2 border">{user?.phone}</td>
                <td className="px-4 py-2 border">{user?.role}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${
                      user.isDeleted ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {user.isDeleted ? "Inactive" : "Active"}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => openEditUserModal(user)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className={`px-3 py-1 rounded-md ${
                      user.isDeleted
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-red-600 text-white"
                    }`}
                    disabled={user.isDeleted}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Add New User</h3>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="border w-full p-2"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="border w-full p-2"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Role</label>
                <select
                  className="border w-full p-2"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      role: e.target.value as "Admin" | "User"
                    })
                  }
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddUserModal(false)}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditUserModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Edit User</h3>
            <form onSubmit={handleEditUser}>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="border w-full p-2"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="border w-full p-2"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Role</label>
                <select
                  className="border w-full p-2"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      role: e.target.value as "Admin" | "User"
                    })
                  }
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-2">Change Status</label>
                <select
                  className="border w-full p-2"
                  value={newUser.isDeleted ? "true" : "false"}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      isDeleted: e.target.value === "true"
                    })
                  }
                >
                  <option value="false">Active</option>
                  <option value="true">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowEditUserModal(false)}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
