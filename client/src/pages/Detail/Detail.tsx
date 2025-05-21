import { useState, type FC } from "react";
import { useShoes } from "../../hooks/useShoes";
import { Link, useParams } from "react-router-dom";
import { colors, numbers } from "../../utils/constants";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { shoe } = useShoes();

  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };

  const shoeQuery = shoe(id!);

  if (shoeQuery.isLoading) return <div> loading.. </div>;

  return (
    <div className="flex flex-col gap-3">
      <Link to="/" className="bg-black-bg p-3 rounded-lg w-fit text-white">
        Geri
      </Link>
      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
        <div className="xl:col-span-2">
          <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit">
            {shoeQuery?.data!.picture?.map((url, key) => (
              <img key={key} src={`../../../public/${url}`} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative">
            {shoeQuery.data!.discount > 0 && (
              <span className="absolute top-2 bg-red-500 rounded-tl-[20px] rounded-br-[20px] py-1 px-2 text-sm text-white font-bold">
                % {shoeQuery.data!.discount} indirim
              </span>
            )}

            {shoeQuery.data!.isNew && (
              <span className="absolute bottom-2  right-2 bg-red-500 rounded-tl-[20px] rounded-br-[20px] py-1 px-2 text-sm text-white font-bold">
                Yeni
              </span>
            )}

            <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mt-[55px]">
              {shoeQuery.data!.name}
            </h1>

            <p className="text-[20px] md:text-[24px] mt-4">
              <span className="text-my-blue">${shoeQuery.data!.price}</span>

              {shoeQuery.data!.discount && (
                <span className="line-through ps-3">
                  ${shoeQuery.data!.price}
                </span>
              )}
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

            <div className="flex gap-5">
              {shoeQuery.data!.color.split(",").map((id) => {
                const color = colors.find((i) => i.id === id);

                const isSelected = selected === id;

                return (
                  <div
                    className={
                      isSelected ? "ring-3 ring-my-blue rounded-full" : ""
                    }
                  >
                    <div
                      onClick={() => toggle(id)}
                      className="m-1 size-9 rounded-full cursor-pointer"
                      style={{ background: color?.code }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">Numara Seçiniz</h2>

            <div className="grid grid-cols-5 gap-4">
              {numbers.map((num) => {
                const inStock = shoeQuery.data!.size.split(",").includes(num);

                const found = selected === num;

                return (
                  <button
                    onClick={() => toggle(num)}
                    disabled={!inStock}
                    type="button"
                    className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
                      found ? "bg-black text-white" : "bg-white"
                    } `}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 text-white">
              <div className="flex gap-2">
                <button className="flex-1 p-4 rounded-lg bg-black">
                  Sepete Ekle
                </button>
                <button className="bg-black p-4 rounded-lg">
                  <img src="/heart.svg" />
                </button>
              </div>
              <button className="bg-blue-400 p-4 rounded-lg">
                Hemen Satın Al
              </button>
            </div>

            <div>
              <h2 className="font-semibold mt-8 mb-2 text-[24px] text-dark-gray">
                Bu ürün hakkında
              </h2>

              <p> ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
