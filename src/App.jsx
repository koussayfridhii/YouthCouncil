import "./App.css";
import { lazy, useEffect, useState } from "react";
import HeroScene from "./components/scenes/HeroScene";
import { useProgress } from "@react-three/drei";
const TopicsScene = lazy(() => import("./components/scenes/TopicsScene"));
function App() {
  const { progress } = useProgress();
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  useEffect(() => {
    progress == 100 && setIsHeroLoaded(true);
  }, [progress]);
  return (
    <>
      <HeroScene onLoaded={() => console.log(true)} />
      {isHeroLoaded && <TopicsScene />}
    </>
  );
}

export default App;
