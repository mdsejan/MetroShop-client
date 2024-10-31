"use client";

import React, { useState } from "react";

interface Category {
  _id: string;
  name: string;
  description: string;
}

const CategoriesManagement: React.FC = () => {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const [categoryData, setCategoryData] = useState<Category>({
    _id: "",
    name: "",
    description: ""
  });

  const [categories, setCategories] = useState<Category[]>([
    {
      _id: "671a5572b8e0fb0998b3388c",
      name: "Audio",
      description: "Category for headsets, speakers, and other audio devices."
    },
    {
      _id: "671a5587b8e0fb0998b3388e",
      name: "Accessories",
      description:
        "Category for additional items like cables, adapters, and mousepads."
    }
  ]);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories([
      ...categories,
      { ...categoryData, _id: Date.now().toString() }
    ]);
    setCategoryData({ _id: "", name: "", description: "" });
    setShowAddCategoryModal(false);
  };

  const handleUpdateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories(
      categories.map((cat) =>
        cat._id === categoryData._id ? categoryData : cat
      )
    );
    setShowUpdateCategoryModal(false);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat._id !== id));
  };

  const openUpdateModal = (category: Category) => {
    setCategoryData(category);
    setShowUpdateCategoryModal(true);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 min-h-[70vh] py-8">
      <div className="mb-8 flex flex-wrap justify-between">
        <h2 className="text-3xl font-semibold">Categories Management</h2>
        <button
          onClick={() => setShowAddCategoryModal(true)}
          className="bg-[#2499EF] text-white px-4 py-2 mt-6 lg:mt-0 rounded-md"
        >
          Add Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#2499EF] text-white">
            <tr>
              <th className="px-4 py-2 border">Category Name</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id}>
                <td className="px-4 py-2 border">{category.name}</td>
                <td className="px-4 py-2 border">{category.description}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => openUpdateModal(category)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category._id)}
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

      {showAddCategoryModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Add New Category</h3>
            <form onSubmit={handleAddCategory}>
              <div className="mb-4">
                <label className="block mb-2">Category Name</label>
                <input
                  type="text"
                  className="border w-full p-2"
                  placeholder="Category Name"
                  value={categoryData.name}
                  onChange={(e) =>
                    setCategoryData({ ...categoryData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  className="border w-full p-2"
                  placeholder="Category Description"
                  value={categoryData.description}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      description: e.target.value
                    })
                  }
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowAddCategoryModal(false)}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUpdateCategoryModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md max-w-lg w-full max-h-full overflow-y-auto">
            <h3 className="text-2xl mb-4">Update Category</h3>
            <form onSubmit={handleUpdateCategory}>
              <div className="mb-4">
                <label className="block mb-2">Category Name</label>
                <input
                  type="text"
                  className="border w-full p-2"
                  placeholder="Category Name"
                  value={categoryData.name}
                  onChange={(e) =>
                    setCategoryData({ ...categoryData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  className="border w-full p-2"
                  placeholder="Category Description"
                  value={categoryData.description}
                  onChange={(e) =>
                    setCategoryData({
                      ...categoryData,
                      description: e.target.value
                    })
                  }
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowUpdateCategoryModal(false)}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesManagement;
