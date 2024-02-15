"use client";

import Header from "./_components/Header";
import { MenuToggleProvider } from "@/hooks/use-menu-toggle";
import Sidebar from "./_components/Sidebar";
import { usePathname, useRouter } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname();
  return (
    <div className='w-full flex flex-col'>
      <MenuToggleProvider>
        <Header />
        <main className='flex'>
          {router.includes("docs") && <Sidebar />}
          {children}
        </main>
      </MenuToggleProvider>
    </div>
  );
};

export default MainLayout;