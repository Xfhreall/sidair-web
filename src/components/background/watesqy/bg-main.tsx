import type { FC } from "react";
import style from "@/app/global.module.css";
const BgWate: FC = () => {
  return <div className={`absolute w-full h-full -z-10 ${style.wate}`}></div>;
};

export default BgWate;
