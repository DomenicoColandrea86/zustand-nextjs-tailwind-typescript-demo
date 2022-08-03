import create from "zustand";
import { devtools } from "zustand/middleware";

export interface IState {
  butterflies: number;
  addButterfly: (by: number) => void;
  removeButterfly: (by: number) => void;
  reset: () => void;
}

export const useStore = create<IState>()(
  devtools((set) => ({
    butterflies: 0,
    addButterfly: (by: number) =>
      set((state) => ({ butterflies: state.butterflies + by })),
    removeButterfly: (by: number) =>
      set((state) => ({ butterflies: state.butterflies - by })),
    reset: () => set((state) => ({ butterflies: 0 })),
  }))
);
