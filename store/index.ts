import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface IState {
  bears: number
  increaseBearPopulation: (by: number) => void
}

export const useStore = create<IState>()(
  devtools(
    (set) => ({
      bears: 0,
      increaseBearPopulation: (by) => set((state) => ({ bears: state.bears + by })),
    })
  )
);