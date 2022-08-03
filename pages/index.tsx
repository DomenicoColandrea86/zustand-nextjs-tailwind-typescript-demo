import type { NextPage } from "next";
import Background from "../components/Background";
import Scene from "../components/Scene";
import Controls from "../components/Controls";
import Count from "../components/Count";
import SiteHead from "../components/SiteHead";

const Home: NextPage = () => {
  return (
    <>
      <SiteHead />
      <Background>
        <Count />
        <Controls />
        <Scene />
      </Background>
    </>
  );
};

export default Home;
