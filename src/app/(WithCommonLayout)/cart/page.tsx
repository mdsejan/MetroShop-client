"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 120.0,
      quantity: 1,
      imageUrl:
        "https://i.pinimg.com/736x/d3/39/12/d3391267520a2644b68e320a2489aa63.jpg" // Sample image path
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 50.0,
      quantity: 2,
      imageUrl:
        "https://i.pinimg.com/564x/eb/77/e7/eb77e74c0f3447345800ffa417120dea.jpg"
    },
    {
      id: 3,
      name: "Headset",
      price: 80.0,
      quantity: 1,
      imageUrl:
        "https://i.pinimg.com/564x/da/36/a8/da36a8eedeae4479dafd7588c0ef4f08.jpg"
    }
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (
    id: number,
    action: "increase" | "decrease"
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1)
            }
          : item
      )
    );
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="mx-auto mt-8 max-w-screen-md md:mt-12">
          <div className="bg-white border rounded-sm">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col lg:flex-row lg:justify-between items-center py-6 space-x-5 text-left"
                    >
                      <Image
                        className="h-24 w-24 flex-none rounded-md object-cover"
                        src={item.imageUrl}
                        alt={item.name}
                        width={96}
                        height={96}
                      />
                      <div className="flex lg:flex-1 items-center justify-between">
                        <div>
                          <div className="text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center space-x-4 text-base font-medium text-gray-900">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, "decrease")
                            }
                            className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, "increase")
                            }
                            className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className=" text-red-500 hover:text-red-700 ml-4"
                          aria-label="Remove item"
                        >
                          <FiTrash size={24} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
