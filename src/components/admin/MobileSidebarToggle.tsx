import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface MobileSidebarToggleProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const MobileSidebarToggle: React.FC<MobileSidebarToggleProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  return (
    <div className="flex lg:hidden justify-between items-center w-full h-24 p-4 bg-white shadow">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 text-gray-600 hover:text-gray-800"
      >
        <AiOutlineMenu size={24} />
      </button>
      <h1 className="text-xl font-semibold">Admin Panel</h1>
    </div>
  );
};

export default MobileSidebarToggle;
