import type { FC } from "react";
import Image from "next/image";
import Bg from "@/public/background/summary.svg";

const BgFavorite: FC = () => {
  return (
    <div className="absolute top-0 w-full h-1/2">
      <Image
        src={Bg}
        alt="bg auth"
        className="object-cover h-full"
        fill={true}
      />
    </div>
  );
};

export default BgFavorite;
