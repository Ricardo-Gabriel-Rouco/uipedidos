'use client'
import { create } from "zustand";
import { TUser, TUserCred } from "../Utils/Types";
import {axiosConfig} from "../Utils/axiosConfig"

interface AllUserState {
  users: TUser[];
  setUsers: (allUsers: TUser[]) => void;
  currentUser: TUserCred;
  setCurrentUser: (currentUser: TUserCred) => void;
  error: string
}

export const userStore = create<AllUserState>((set: any) => ({
  users: [],
  currentUser: '',
  error: '',
  setUsers: (allUsers: TUser[]) => set({ users: [...allUsers] }),
  setCurrentUser: async(cUser: TUserCred) =>{
    try {
      const  {data} = await axiosConfig.post('/login/', cUser);
      const cUserString = JSON.stringify(data);
      window.localStorage.setItem('currentUser', cUserString);
      set({ currentUser: cUser })
    } catch (error) {
      set({ error: 'Invalid credentials' })
    }
  },
}));
