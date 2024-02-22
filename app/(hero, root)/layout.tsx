const HeroLayout = ({
  children,
  Island,
}: {
  children: React.ReactNode;
  Island: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full justify-evenly h-full items-center lg:flex-row">
      <div className="h-[40%] lg:h-full w-full lg:w-[40%]">{children}</div>
      <div className="h-[60%] lg:h-full w-[90%] lg:w-[60%]">{Island}</div>
    </div>
  );
};

export default HeroLayout;
