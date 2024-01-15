import { TOrder } from "../Utils/Types"
export const createOrderSlice = (set: any) => ({
  orders: [],
  setOrders: (allOrders:[TOrder]) => set((state: any) => ({orders: [...state.orders, allOrders] }))
})