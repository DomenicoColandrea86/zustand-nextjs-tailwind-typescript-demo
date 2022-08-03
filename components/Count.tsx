import { useStore } from "../store";
import { butterfliesSelector } from "../store/selectors";

const Count = () => {
  const numberOfButterflies = useStore(butterfliesSelector);
  return (
    <p className="text-2xl dark:text-white pb-2">
      Total Butterflies: {numberOfButterflies}
    </p>
  );
};

export default Count;
