import { TCostumer } from "../Utils/Types"
export const createCostumerSlice = (set: any) => ({
  costumers: [],
  setCosutmers: (allCostumers:[TCostumer]) => set((state: any) => ({costumers: [...state.orders, allCostumers] }))
})