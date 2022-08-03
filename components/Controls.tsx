import { useStore } from "../store";
import {
  addButterflyAction,
  removeButterflyAction,
  resetAction,
} from "../store/selectors";

const Controls = () => {
  const addButterfly = useStore(addButterflyAction);
  const removeButterfly = useStore(removeButterflyAction);
  const reset = useStore(resetAction);
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 ml-0"
        onClick={() => addButterfly(1)}
      >
        Add a Butterfly
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1"
        onClick={() => removeButterfly(1)}
      >
        Remove a Butterfly
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1"
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  );
};

export default Controls;
