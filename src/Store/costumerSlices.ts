import { TCostumer } from "../Utils/Types"
export const createCostumerSlice = (set: any) => ({
  costumers: [],
  setOrders: (allCostumers:[TCostumer]) => set((state: any) => ({costumers: [...state.orders, allCostumers] }))
})