"use client";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  images: string[];
  isDeleted: boolean;
}

const ProductManagement = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const token = useSelector(useCurrentToken);

  console.log(token);

  const products: Product[] = [
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

  const handleUpdateProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowAddProductModal(true);
  };

  const handleDeleteProduct = (id: string) => {
    console.log("Delete product:", id);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddProductModal(false);
    setSelectedProduct(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductDetailView = (product: Product) => {
    setSelectedProduct(product);
    setShowProductDetailModal(true);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 min-h-[70vh] py-8">
      <div className="mb-8 flex flex-wrap justify-between items-center">
        <h2 className="text-3xl font-semibold">Product Management</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Products"
          className="border rounded-md p-2"
        />
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
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 border">{product.stockQuantity}</td>
                <td className="px-4 py-2 border">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProductDetailView(product)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleUpdateProduct(product)}
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">
              {selectedProduct ? "Edit Product" : "Add New Product"}
            </h3>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block mb-2">Product Name</label>
                <input
                  type="text"
                  defaultValue={selectedProduct?.name || ""}
                  className="border w-full p-2"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  defaultValue={selectedProduct?.description || ""}
                  className="border w-full p-2"
                  placeholder="Enter product description"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Price</label>
                <input
                  type="number"
                  defaultValue={selectedProduct?.price || ""}
                  className="border w-full p-2"
                  placeholder="Enter product price"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Stock Quantity</label>
                <input
                  type="number"
                  defaultValue={selectedProduct?.stockQuantity || ""}
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
                  {selectedProduct ? "Save Changes" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {showProductDetailModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-md w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Product Details</h3>
            <p>
              <strong>Name:</strong> {selectedProduct.name}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Price:</strong> ${selectedProduct.price.toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {selectedProduct.stockQuantity}
            </p>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <div className="flex space-x-2 mt-4">
              {selectedProduct.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="product image"
                  width={50}
                  height={50}
                  className="w-24 h-24 object-cover"
                />
              ))}
            </div>
            <button
              onClick={() => setShowProductDetailModal(false)}
              className="bg-gray-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
