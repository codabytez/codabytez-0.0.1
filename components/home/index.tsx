import { NextPage } from "next";
import Details from "./details";
import GameBoard from "./game-board";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center gap-20 w-full">
      <Details />
      <GameBoard />
    </div>
  );
};

export default Home;
