import { create } from "zustand";
import { TCostumer } from "../Utils/Types"

type CostumerStoreType = {
  costumers: TCostumer[];
  setCostumers: (allCostumers: TCostumer[]) => void;
  
}
export const costumerStore = create<CostumerStoreType>((set) => ({
  costumers: [],
  setCostumers: (allCostumers: TCostumer[]) => set((state: any) => ({costumers: allCostumers }))
}));






