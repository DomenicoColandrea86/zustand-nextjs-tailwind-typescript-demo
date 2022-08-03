import { IState } from "../store";

// It is generally recommended to memoize selectors with useCallback.
// This will prevent unnecessary computations each render.
// It also allows React to optimize performance in concurrent mode.

// If a selector doesn't depend on scope
// you can define it outside the render function
// to obtain a fixed reference without useCallback.

export const butterfliesSelector = (state: IState) => state.butterflies;

export const addButterflyAction = (state: IState) => state.addButterfly;

export const removeButterflyAction = (state: IState) => state.removeButterfly;

export const resetAction = (state: IState) => state.reset;
