"use client";

import Header from "./_components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full flex flex-col'>
      <Header />
        <main className='flex'>
          {children}
        </main>
    </div>
  );
};

export default MainLayout;
