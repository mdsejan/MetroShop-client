"use client";
import React, { useState } from "react";

const ProductManagement = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  // Demo product data
  const products = [
    {
      _id: "671a4c97a5fc4a57f0d95aef",
      name: "Noise-Canceling Headset",
      description:
        "Over-ear headset with noise-canceling technology and a built-in microphone.",
      price: 89.99,
      stockQuantity: 75,
      category: "Audio",
      images: [
        "https://i.pinimg.com/736x/d3/39/12/d3391267520a2644b68e320a2489aa63.jpg",
        "https://i.pinimg.com/736x/4d/c1/64/4dc1648b092643b74a85656336d4fd80.jpg"
      ],
      isDeleted: false
    }
  ];

  // Dummy functions for actions
  const handleUpdateProduct = (id: string) => {
    console.log("Update product:", id);
  };

  const handleDeleteProduct = (id: string) => {
    console.log("Delete product:", id);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // Add product logic here
    setShowAddProductModal(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 min-h-[70vh] py-8">
      <div className="mb-8 flex flex-wrap justify-between">
        <h2 className="text-3xl font-semibold">Product Management</h2>
        <button
          onClick={() => setShowAddProductModal(true)}
          className="bg-[#2499EF] text-white px-4 py-2 mt-6 lg:mt-0 rounded-md"
        >
          Create Product
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#2499EF] text-white">
            <tr>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Stock Quantity</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border">{product.stockQuantity}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleUpdateProduct(product._id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Add New Product</h3>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block mb-2">Product Name</label>
                <input
                  type="text"
                  className="border w-full p-2"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  className="border w-full p-2"
                  placeholder="Enter product description"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Price</label>
                <input
                  type="number"
                  className="border w-full p-2"
                  placeholder="Enter product price"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Stock Quantity</label>
                <input
                  type="number"
                  className="border w-full p-2"
                  placeholder="Enter stock quantity"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddProductModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
