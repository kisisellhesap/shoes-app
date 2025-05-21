import { type FC } from "react";
import type { Shoe } from "../../../utils/types";
import { Link } from "react-router-dom";

interface Props {
  item: Shoe;
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white p-2 rounded-[20px] relative">
        <img
          src={item.picture[0]}
          className="w-[100%] object-fit-cover"
          alt=""
        />

        {item.discount > 0 && (
          <span className="absolute top-2 bg-red-500 rounded-tl-[20px] rounded-br-[20px] py-1 px-2 text-sm text-white font-bold">
            % {item.discount} indirim
          </span>
        )}

        {item.isNew && (
          <span className="absolute bottom-2  right-2 bg-red-500 rounded-tl-[20px] rounded-br-[20px] py-1 px-2 text-sm text-white font-bold">
            Yeni
          </span>
        )}
      </div>
      <h3 className="font-bold text-xl line-clamp-1">{item.name}</h3>

      <Link
        to={`/detail/${item._id}`}
        className="bg-black-bg py-2 px-3 cursor-pointer hover:brightness-110 rounded-[10px] text-white text-left"
      >
        Ürünü Görüntüle -<span className="text-yellow-400"> ${item.price}</span>
      </Link>
    </div>
  );
};

export default Card;
