"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const SidebarToggleContext = createContext<{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const useMenuToggle = () => useContext(SidebarToggleContext);

export const MenuToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarToggleContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};
