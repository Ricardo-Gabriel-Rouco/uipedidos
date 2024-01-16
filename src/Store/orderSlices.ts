import { create } from "zustand";
import { TOrder } from "../Utils/Types";

type OrderStoreType = {
  orders: TOrder[];
  setOrders: (allOrders: TOrder[]) => void;
};

export const orderStore = create<OrderStoreType>((set) => ({
  orders: [],
  setOrders: (allOrders) => set((state) => ({ orders: [...state.orders, ...allOrders] })),
}));
