import { create } from "zustand";

import {createCostumerSlice} from './costumerSlices'
import {createOrderSlice} from './orderSlices'
import {createUserSlice} from './userSlices'

export const useBoundStore = create((set) => ({
  ...createUserSlice(set),
  ...createCostumerSlice(set),
  ...createOrderSlice(set),
}))