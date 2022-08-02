import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  bears: number
  increaseBearPopulation: (by: number) => void
}

export const useStore = create<State>()(
  devtools(
    (set) => ({
      bears: 0,
      increaseBearPopulation: (by) => set((state) => ({ bears: state.bears + by })),
    })
  )
);