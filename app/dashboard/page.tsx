"use client";

import { useState } from "react";
import Link from "next/link";

interface Order {
  id: string;
  customer: string;
  product: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  date: string;
  amount: number;
}

interface Product {
  id: string;
  name: string;
  stock: number;
  sales: number;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "orders" | "products"
  >("overview");

  // Mock data
  const orders: Order[] = [
    {
      id: "ORD-001",
      customer: "anjali singh",
      product: "Classic Sofa",
      status: "completed",
      date: "2026-01-18",
      amount: 1299,
    },
    {
      id: "ORD-002",
      customer: "kratika Tripathi",
      product: "Modern Sectional",
      status: "processing",
      date: "2026-01-19",
      amount: 1899,
    },
    {
      id: "ORD-003",
      customer: "Himanshu Tiwari",
      product: "Luxury Chaise",
      status: "pending",
      date: "2026-01-20",
      amount: 2499,
    },
    {
      id: "ORD-004",
      customer: "Niranjan Verma",
      product: "Minimalist Sofa",
      status: "completed",
      date: "2026-01-17",
      amount: 1599,
    },
  ];

  const products: Product[] = [
    { id: "PRD-001", name: "Classic Sofa", stock: 12, sales: 45 },
    { id: "PRD-002", name: "Modern Sectional", stock: 8, sales: 32 },
    { id: "PRD-003", name: "Luxury Chaise", stock: 5, sales: 18 },
    { id: "PRD-004", name: "Minimalist Sofa", stock: 15, sales: 28 },
  ];

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    totalRevenue: orders.reduce((sum, o) => sum + o.amount, 0),
    totalProducts: products.length,
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "processing":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-300 border-red-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/60">Manage your furniture store</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="text-white/60 text-sm mb-1">Total Orders</div>
            <div className="text-3xl font-bold">{stats.totalOrders}</div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="text-white/60 text-sm mb-1">Pending Orders</div>
            <div className="text-3xl font-bold">{stats.pendingOrders}</div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="text-white/60 text-sm mb-1">Total Revenue</div>
            <div className="text-3xl font-bold">
              ₹{stats.totalRevenue.toLocaleString()}
            </div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="text-white/60 text-sm mb-1">Products</div>
            <div className="text-3xl font-bold">{stats.totalProducts}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 px-1 border-b-2 transition ${
              activeTab === "overview"
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`pb-3 px-1 border-b-2 transition ${
              activeTab === "orders"
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`pb-3 px-1 border-b-2 transition ${
              activeTab === "products"
                ? "border-white text-white"
                : "border-transparent text-white/60 hover:text-white"
            }`}
          >
            Products
          </button>
        </div>

        {/* Tab Content */}
        <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-6">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-medium">New order received</div>
                    <div className="text-sm text-white/60">
                      Order #ORD-003 - ₹20,499
                    </div>
                  </div>
                  <div className="text-sm text-white/60">2 hours ago</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-medium">Order completed</div>
                    <div className="text-sm text-white/60">
                      Order #ORD-001 shipped
                    </div>
                  </div>
                  <div className="text-sm text-white/60">1 day ago</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-medium">Low stock alert</div>
                    <div className="text-sm text-white/60">
                      Luxury Chaise - 5 units remaining
                    </div>
                  </div>
                  <div className="text-sm text-white/60">2 days ago</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Orders Management</h2>
                <Link
                  href="/orders"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20"
                >
                  View All Orders
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-medium text-white/80">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-white/80">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-white/80">
                        Product
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-white/80">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-white/80">
                        Date
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-white/80">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="py-3 px-4 font-mono text-sm">
                          {order.id}
                        </td>
                        <td className="py-3 px-4">{order.customer}</td>
                        <td className="py-3 px-4">{order.product}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded text-xs border ${getStatusColor(order.status)}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-white/60">
                          {order.date}
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          ₹{order.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Products Management</h2>
                <Link
                  href="/showcase"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/20"
                >
                  View Showcase
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-sm text-white/60">{product.id}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          product.stock < 10
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : "bg-green-500/20 text-green-300 border border-green-500/30"
                        }`}
                      >
                        {product.stock} in stock
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-white/60">Total Sales</div>
                      <div className="font-medium">{product.sales} units</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
