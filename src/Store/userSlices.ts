import { TUser } from "../Utils/Types"
export const createUserSlice = (set: any) => ({
  users: [],
  setOrders: (allUsers:[TUser]) => set((state: any) => ({users: [...state.users, allUsers] }))
})