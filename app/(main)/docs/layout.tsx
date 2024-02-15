import React from "react";
import Sidebar from "./_components/Sidebar";

type Props = {};

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default DocsLayout;
