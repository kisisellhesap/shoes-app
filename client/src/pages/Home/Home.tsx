import { type FC } from "react";
import Banner from "./Banner";
import Cards from "./Cards/Cards";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />

      <div className="flex">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
