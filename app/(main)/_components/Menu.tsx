"use client";

import { useMenuToggle } from "@/hooks/use-menu-toggle";
import React from "react";

const Menu = () => {
  const { isSidebarOpen, toggleSidebar } = useMenuToggle();

  return (
    <div className='mr-[10px]' onClick={() => toggleSidebar()}>
      {isSidebarOpen && (
        <div className='space-y-2 cursor-pointer animate-out'>
          <div className='w-6 h-[1px] bg-gray-600'></div>
          <div className='w-6 h-[1px] bg-gray-600'></div>
          <div className='w-6 h-[1px] bg-gray-600'></div>
        </div>
      )}
      {!isSidebarOpen && (
        <div className='space-y-2 animate-in cursor-pointer'>
          <span className='block w-2 h-[1px] bg-gray-600'></span>
          <span className='block w-6 h-[1px] bg-gray-600'></span>
          <span className='block w-6 h-[1px] bg-gray-600'></span>
        </div>
      )}
    </div>
  );
};

export default Menu;
