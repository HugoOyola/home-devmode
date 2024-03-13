import React from "react";
import Link from "next/link";

const links = [
  {
    href: "/departamento",
    label: "Departamento",
  },
  {
    href: "/secciones",
    label: "Secciones",
  },
  {
    href: "/profesores",
    label: "Profesores",
  },
  {
    href: "/investigacion",
    label: "Investigación",
  },
  {
    href: "/publicaciones",
    label: "Publicaciones",
  },
];

const Menu = () => {
  return (
    <div className="w-[864px] h-16 justify-end items-center inline-flex">
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-[146px] flex flex-col justify-center items-center gap-2.5 pt-[0.8125rem] pb-[0.8125rem] pl-[1.125rem] pr-[1.125rem] h-16 hover:border-b-8 hover:border-[#0a7bc2]">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <Link href={"#"} className="text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">departamento</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-[94px] px-[9px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex ">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">secciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-[124px] px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">profesores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-[142px] px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="text-center text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">investigación </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-36 px-[18px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">publicaciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start inline-flex">
        <div className="w-[65px] px-[9px] py-[13.50px] flex-col justify-center items-center gap-2.5 flex">
          <div className="opacity-90 justify-start items-center inline-flex">
            <div className="justify-start items-start flex">
              <div className="justify-start items-center flex">
                <div className="text-gray-50 text-sm font-medium uppercase leading-[17.50px] tracking-tight">más</div>
                <svg width="{16}" height="{16}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.06 5.72656L8 8.7799L4.94 5.72656L4 6.66656L8 10.6666L12 6.66656L11.06 5.72656Z" fill="#F9FAFB" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-8 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-[42px] px-[13.50px] py-[9px] border-gray-50 flex-col justify-start items-center gap-1 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative">
              <svg width="{24}" height="{24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9649 14.2551H15.7549L20.7449 19.2551L19.2549 20.7451L14.2549 15.7551V14.9651L13.9849 14.6851C12.8449 15.6651 11.3649 16.2551 9.75488 16.2551C6.16488 16.2551 3.25488 13.3451 3.25488 9.75513C3.25488 6.16513 6.16488 3.25513 9.75488 3.25513C13.3449 3.25513 16.2549 6.16513 16.2549 9.75513C16.2549 11.3651 15.6649 12.8451 14.6849 13.9851L14.9649 14.2551ZM5.25488 9.75513C5.25488 12.2451 7.26488 14.2551 9.75489 14.2551C12.2449 14.2551 14.2549 12.2451 14.2549 9.75513C14.2549 7.26513 12.2449 5.25513 9.75489 5.25513C7.26488 5.25513 5.25488 7.26513 5.25488 9.75513Z" fill="#F9FAFB" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
