import React from "react";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaTags,
  FaDollarSign
} from "react-icons/fa";

const Dashboard = () => {
  const dashboardData = {
    totalUsers: 150,
    totalProducts: 75,
    totalOrders: 120,
    totalCategories: 10,
    totalSales: 3000
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      {/* Total Users Card */}
      <div className="flex flex-col justify-between p-4 border rounded shadow bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-blue-200 rounded-full">
            <FaUsers className="text-blue-600" size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">{dashboardData.totalUsers}</h4>
            <span className="text-sm">Total Users</span>
          </div>
        </div>
      </div>

      {/* Total Products Card */}
      <div className="flex flex-col justify-between p-4 border rounded shadow bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-green-200 rounded-full">
            <FaBoxOpen className="text-green-600" size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">{dashboardData.totalProducts}</h4>
            <span className="text-sm">Total Products</span>
          </div>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className="flex flex-col justify-between p-4 border rounded shadow bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-200 rounded-full">
            <FaShoppingCart className="text-yellow-600" size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">{dashboardData.totalOrders}</h4>
            <span className="text-sm">Total Orders</span>
          </div>
        </div>
      </div>

      {/* Total Categories Card */}
      <div className="flex flex-col justify-between p-4 border rounded shadow bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-purple-200 rounded-full">
            <FaTags className="text-purple-600" size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">
              {dashboardData.totalCategories}
            </h4>
            <span className="text-sm">Total Categories</span>
          </div>
        </div>
      </div>

      {/* Total Sales Card */}
      <div className="flex flex-col justify-between p-4 border rounded shadow bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-red-200 rounded-full">
            <FaDollarSign className="text-red-600" size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">${dashboardData.totalSales}</h4>
            <span className="text-sm">Total Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
