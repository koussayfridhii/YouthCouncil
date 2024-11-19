import "./App.css";
import { lazy } from "react";
import HeroScene from "./components/scenes/HeroScene";
const TopicsScene = lazy(() => import("./components/scenes/TopicsScene"));
function App() {
  return (
    <>
      <HeroScene />
      <TopicsScene />
      {/* {isHeroLoaded ? <TopicsScene /> : <div className="h-dvh w-full"></div>} */}
    </>
  );
}

export default App;
