"use client";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 w-64 transform bg-gray-900 text-gray-200 transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
    >
      <div className="p-4 text-2xl font-bold border-b border-gray-700 text-center">
        MetroShop
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin"
              className={`block p-2 rounded ${
                pathname === "/admin" ? "bg-gray-800" : "hover:bg-gray-800"
              } transition-colors duration-200`}
              onClick={() => setSidebarOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/user-management"
              className={`block p-2 rounded ${
                pathname === "/admin/user-management"
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              } transition-colors duration-200`}
              onClick={() => setSidebarOpen(false)}
            >
              User Management
            </Link>
          </li>
          <li>
            <Link
              href="/admin/product-management"
              className={`block p-2 rounded ${
                pathname === "/admin/product-management"
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              } transition-colors duration-200`}
              onClick={() => setSidebarOpen(false)}
            >
              Product Management
            </Link>
          </li>
          <li>
            <Link
              href="/admin/order-management"
              className={`block p-2 rounded ${
                pathname === "/admin/order-management"
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              } transition-colors duration-200`}
              onClick={() => setSidebarOpen(false)}
            >
              Order Management
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 mt-24 border-t border-gray-700">
        <Link
          href="/"
          className="flex items-center w-full p-2 text-gray-200 hover:text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200"
          onClick={() => setSidebarOpen(false)}
        >
          <AiOutlineHome className="mr-2" />
          Home
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
