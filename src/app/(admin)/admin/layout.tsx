"use client";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <AdminHeader />

        {/* Mobile Sidebar Toggle */}
        <div className="flex lg:hidden justify-between items-center w-full h-24 p-4 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <AiOutlineMenu size={24} />
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </div>

        {/*Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>

      {/* Overlay for Sidebar on Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-5 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
