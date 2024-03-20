import { create } from "zustand";
import { TOrder } from "../Utils/Types";

type OrderStoreType = {
  orders: TOrder[];
  setOrders: (allOrders: TOrder[]) => void;
  createForm: boolean;
  setCreateForm: () => void;
};

export const orderStore = create<OrderStoreType>((set) => ({
  orders: [],
  createForm: false,
  setCreateForm: () => set((state) => ({ createForm: !state.createForm })),
  setOrders: (allOrders) => set((state) => ({ orders: [...state.orders, ...allOrders] })),
}));
