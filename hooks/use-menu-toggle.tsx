import React, { createContext, useContext, useState } from "react";

// Create a context for the sidebar toggle state
const SidebarToggleContext = createContext<{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

// Custom hook to access the sidebar toggle context
export const useMenuToggle = () => useContext(SidebarToggleContext);

// Provider component to wrap your app and provide the sidebar toggle context
export const MenuToggleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
