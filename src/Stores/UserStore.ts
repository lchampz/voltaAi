import { getUsers } from "../Api/Requests";
import { IUsersResponse } from "../Types/IApi";
import { IUser } from "../Types/IUser";
import { create } from 'zustand';

export interface IUserState {
    user: IUser | null
}

export interface IUserActions {
    setUser: (user: IUser) => void,
    clearUser: () => void,
    getAllUsers: () => Promise<{data: IUsersResponse}>
}

export type TUserStore = IUserActions & IUserState;

export const useUserStore = create<TUserStore>((set) => ({
    user: null,
    
    setUser: (user) => set({ user }),
    getAllUsers: async () => await getUsers(),
    clearUser: () => set({user: null})
}))