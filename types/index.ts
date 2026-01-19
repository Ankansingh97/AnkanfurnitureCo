export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Order {
  id: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  status: "pending" | "completed" | "canceled";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
}
