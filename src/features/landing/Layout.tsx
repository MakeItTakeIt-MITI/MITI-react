import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className=" w-[1920px]  bg-[#000] h-[800px]">{children}</section>
  );
};

export default Layout;
