import { create } from "zustand";
import { TUser, TUserCred } from "../Utils/Types";

interface AllUserState {
  users: TUser[];
  setUsers: (allUsers: TUser[]) => void;
  currentUser: TUserCred;
  setCurrentUser: (currentUser: TUserCred) => void;
}

export const userStore = create<AllUserState>((set: any) => ({
  users: [],
  currentUser: {},
  setUsers: (allUsers: TUser[]) => set({ users: [...allUsers] }),
  setCurrentUser: (cUser: TUserCred) =>{
    set({ currentUser: cUser })
    const cUserString = JSON.stringify(cUser);
    window.localStorage.setItem('currentUser', cUserString);
  },
}));
