"use client";

import React from "react";
import { Navigation } from "./Navigation";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const checkPath = usePathname();
  return (
    <div className='w-full flex justify-between p-5 border-b-2 items-center'>
      {/* left */}
      <div className="flex-1 flex items-center">
        {checkPath.includes("docs") && <Menu />}
        <Navigation />
      </div>
      {/* middle */}
      <div className="grow text-center font-bold">Starter for DEV</div>
      {/* right */}
      <div className='flex flex-1 justify-end'>
        <div className='flex px-[10px]'>
          <div>icon</div>
          <input type='text' className='w-[100px] outline rounded' />
        </div>
        <div>github</div>
      </div>
    </div>
  );
};

export default Header;