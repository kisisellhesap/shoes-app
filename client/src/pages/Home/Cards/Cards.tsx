import { type FC } from "react";
import Card from "./Card";
import { useShoes } from "../../../hooks/useShoes";

const Cards: FC = () => {
  const { shoes } = useShoes();

  if (shoes.isLoading) return <div>loading</div>;

  if (shoes.isError) return <p> {shoes.error.message} </p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] w-[100%]  gap-3 ">
      {shoes.data?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
