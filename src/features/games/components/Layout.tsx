interface LayoutProps {
  height: string;
  children: React.ReactNode;
}

const Layout = ({ height, children }: LayoutProps) => {
  return (
    <div
      style={{ height: height }}
      className={`${height} sm:px-[1.31rem] sm:py-[1.25rem] md:p-[1.75rem] md:rounded-[1.25rem] sm:bg-light-dark md:bg-dark-card  md:border border-[#525252] space-y-5 flex flex-col justify-center`}
    >
      {children}
    </div>
  );
};

export default Layout;
