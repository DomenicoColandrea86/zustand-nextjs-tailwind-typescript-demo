import { useStore } from "../store";
import { butterfliesSelector } from "../store/selectors";
import Butterfly from "./Butterfly/Butterfly";

const Scene = () => {
  const numberOfButterflies = useStore(butterfliesSelector);
  return (
    <>
      {Array(numberOfButterflies)
        .fill(Butterfly)
        .map((_, index) => (
          <Butterfly key={index} />
        ))}
    </>
  );
};

export default Scene;
