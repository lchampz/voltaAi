import { getCards } from "../Api/Requests";
import { ICardsResponse } from "../Types/IApi";
import { IFidelityCard } from "../Types/IFidelityCard";
import { create } from "zustand";

export interface ICardState {
  card: IFidelityCard | null;
}

export interface ICardActions {
  setCard: (card: IFidelityCard) => void;
  clearCard: () => void;
  getAllCards: () => Promise<{ data: ICardsResponse }>;
}

export type TCardStore = ICardState & ICardActions;

export const useCardStore = create<TCardStore>((set) => ({
  card: null,

  getAllCards: async () => await getCards(),
  setCard: (card) => set({ card: card }),
  clearCard: () => set({ card: null }),
}));
