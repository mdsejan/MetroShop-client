"use client";
import React, { useState } from "react";

interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

interface User {
  name: string;
}

interface Order {
  id: number;
  user: User;
  status: string;
  total: number;
  items: OrderItem[];
}

const demoOrders: Order[] = [
  {
    id: 1,
    user: { name: "User1" },
    status: "Pending",
    total: 100,
    items: [
      { productId: 1, productName: "Product A", quantity: 2, price: 50 },
      { productId: 2, productName: "Product B", quantity: 1, price: 50 }
    ]
  },
  {
    id: 2,
    user: { name: "User2" },
    status: "Shipped",
    total: 200,
    items: [{ productId: 3, productName: "Product C", quantity: 1, price: 200 }]
  },
  {
    id: 3,
    user: { name: "User3" },
    status: "Cancelled",
    total: 150,
    items: [{ productId: 4, productName: "Product D", quantity: 3, price: 50 }]
  }
];

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(demoOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleCancelOrder = (orderId: number) => {
    if (confirm("Are you sure you want to cancel this order?")) {
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    }
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Order Management</h2>

      {/* Order List */}
      <table className="min-w-full bg-white border mb-4">
        <thead className="bg-[#2499EF] text-white">
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.user.name}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">${order.total}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleCancelOrder(order.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="bg-[#2499EF] text-white px-2 py-1 rounded ml-2"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-xl mb-2">
              Order Details - ID: {selectedOrder.id}
            </h3>
            <p>
              <strong>User:</strong> {selectedOrder.user.name}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <p>
              <strong>Total:</strong> ${selectedOrder.total}
            </p>
            <h4 className="text-lg mt-4">Items:</h4>
            <ul>
              {selectedOrder.items.map((item) => (
                <li key={item.productId}>
                  {item.productName} - Qty: {item.quantity} - Price: $
                  {item.price}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
