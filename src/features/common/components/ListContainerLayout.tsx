export const ListContainerLayout = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height: number;
}) => {
  return (
    <article
      style={{
        height: `${height}px`,
      }}
      className="sm:hidden md:block custom-scrollbar bg-light-dark w-full  p-4 rounded-[4px] space-y-3 overflow-y-scroll"
    >
      {children}
    </article>
  );
};
