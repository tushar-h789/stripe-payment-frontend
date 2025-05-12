"use client";

import { useState } from "react";
import CheckoutButton from "./_components/checkout-button";

interface FormData {
  name: string;
  productName: string;
  category: string;
  price: string;
  quantity: number;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  category: string;
  userName: string;
}

export default function Home() {
  const [form, setForm] = useState<FormData>({
    name: "",
    productName: "",
    category: "",
    price: "",
    quantity: 1,
  });

  const [submittedItem, setSubmittedItem] = useState<CartItem | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.productName || !form.price || !form.quantity || !form.name) {
      alert("সব ফিল্ড পূরণ করুন।");
      return;
    }

    const cartItem: CartItem = {
      name: form.productName,
      price: Number(form.price),
      quantity: form.quantity,
      category: form.category,
      userName: form.name,
    };

    setSubmittedItem(cartItem);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🛍️ Order Your Product
        </h1>

        {!submittedItem ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category (e.g. Clothing, Electronics)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (USD)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              min={1}
              placeholder="Quantity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Confirm Order & Checkout
            </button>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-semibold text-green-600">
              ✅ Order Summary
            </h2>
            <p>
              <strong>Customer:</strong> {submittedItem.userName}
            </p>
            <p>
              <strong>Product:</strong> {submittedItem.name}
            </p>
            <p>
              <strong>Category:</strong> {submittedItem.category || "N/A"}
            </p>
            <p>
              <strong>Quantity:</strong> {submittedItem.quantity}
            </p>
            <p>
              <strong>Total:</strong> $
              {(submittedItem.price * submittedItem.quantity).toFixed(2)}
            </p>

            <CheckoutButton items={[submittedItem]} />

            <button
              onClick={() => setSubmittedItem(null)}
              className="mt-4 text-sm text-indigo-500 underline"
            >
              ← Modify Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
