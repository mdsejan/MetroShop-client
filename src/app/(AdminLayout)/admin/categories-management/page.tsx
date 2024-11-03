"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery
} from "@/redux/features/category/categoryApi";
import { toast } from "sonner";

interface Category {
  _id: string;
  name: string;
  description: string;
}

const CategoriesManagement: React.FC = () => {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  // const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const [categoryData, setCategoryData] = useState<Category>({
    _id: "",
    name: "",
    description: ""
  });

  const token = useSelector(useCurrentToken);
  const { data: categoriesData, isLoading, error } = useGetCategoryQuery({});
  const [createCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const categories = categoriesData?.data || [];

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Creating Category ...");

    if (!token) {
      toast.error("Something wents wrong", { id: toastId, duration: 1300 });
      setShowAddCategoryModal(false);
      return;
    }
    try {
      await createCategory({
        categoryInfo: {
          name: categoryData.name,
          description: categoryData.description
        },
        token
      }).unwrap();

      toast.success("Category created successfully!", {
        id: toastId,
        duration: 2000
      });

      setCategoryData({ _id: "", name: "", description: "" });
      setShowAddCategoryModal(false);
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  const handleDeleteCategory = (categoryId: string) => {
    if (!categoryId || !token) {
      toast.error("Something wents wrong", { duration: 1300 });
      return;
    }

    const confirmDelete = async () => {
      try {
        const res = await deleteCategory({ token, categoryId }).unwrap();
        if (res?.success) {
          toast.success(res.message, { duration: 1300 });
        }
      } catch (error) {
        console.error("Failed to delete category:", error);
        toast.error("Failed to delete the Category");
      }
    };

    toast(
      <div>
        <p>Are you sure you want to delete this Category?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              confirmDelete();
              toast.dismiss();
            }}
            className="bg-red-500 text-white py-1 px-3 rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-gray-500 text-white py-1 px-3 rounded"
          >
            No
          </button>
        </div>
      </div>,
      {
        duration: 5000
      }
    );
  };

  const openUpdateModal = (category: Category) => {
    setCategoryData(category);
    // setShowUpdateCategoryModal(true);
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

      {isLoading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p>Error loading categories.</p>
      ) : (
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
              {categories.map((category: Category) => (
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
      )}

      {/* Add Category Modal */}
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

      {/* Update Category Modal */}
      {/* {showUpdateCategoryModal && (
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
      )} */}
    </div>
  );
};

export default CategoriesManagement;
