import React from "react";
import Image from "next/image";
import Menu from "./Header/Menu";

const Header = () => {
  return (
  <div className="w-full h-[94px] px-5 bg-[#042354] justify-center items-center gap-[248px] inline-flex">
    <div className="h-[94px] justify-start items-end gap-4 flex">
      <div className="pr-[21px] py-[21px] justify-start items-start flex">
        <div className="w-[239px] h-[52px] relative">
          <div className="w-[238.26px] h-[52px] left-[1px] top-0 absolute">
            <Image src={"/logo_unidad.svg"} alt="Logo" layout="fill" />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  </div>
  );
};

export default Header;
