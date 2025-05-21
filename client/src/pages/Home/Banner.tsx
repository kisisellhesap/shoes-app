import { type FC } from "react";

const Banner: FC = () => {
  return (
    <div className="bg-[url(./banner.png)] bg-no-repeat  bg-cover text-white h-[400px] rounded-[50px] p-5 font-bold text-xl flex flex-col justify-center">
      <div className=" max-w-[600px]">
        <p className="font-semibold">
          Sadece geçerli süreyle <br />
          <span className="text-[50px]">% 30 indirim </span>
          <br />
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>
    </div>
  );
};

export default Banner;
