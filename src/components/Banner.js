import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[274px] bg-[#00033E] justify-center items-center gap-[42px] inline-flex">
      <div className="w-[1140px] h-[274px] justify-center items-center gap-[42px] inline-flex">
        <img className="w-[398px] self-stretch" src="/banner.png" />
        <div className="grow shrink basis-0 py-[34px] flex-col justify-center items-end inline-flex">
          <div className="self-stretch h-24 pb-5 flex-col justify-start items-start flex">
            <div className="self-stretch text-blue-50 text-3xl font-bold leading-[37.50px]">Laboratorio Experimental de Creación, Innovación y Tecnología</div>
          </div>
          <div className="self-stretch h-[39px] pb-[9px] flex-col justify-center items-start flex">
            <div className="self-stretch text-white text-xl font-light leading-[30px]">Explora nuestro catálogo de investigaciones.</div>
          </div>
          <div className="self-stretch h-[71px] pt-5 flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-center flex">
              <div className="px-[18px] py-[13.50px] border-2 border-white justify-start items-center gap-[9px] inline-flex">
                <div className="justify-start items-start gap-[9px] flex">
                  <div className="text-white text-base font-medium uppercase leading-normal"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
