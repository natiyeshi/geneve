export const Section = ({
  children,
  className = "",
  childClassName = "",
  h = true,
  hs = "2xl:min-h-[40vh]",
  maxWidth = "1500",
  pixelate = false,
}: {
  children: any;
  childClassName?: string;
  className?: string;
  maxWidth?: string;
  hs?: string;
  h?: boolean;
  pixelate?: boolean;
}) => {
  return (
    <section
      className={`${className} ${
        h && "2xl:min-h-[40vh] max-2xl:min-h-screen 2xl:py-2 max-md:min-h-[50vh]"
      } w-full flex relative`}
    >
      <div
        className={` w-full h-fit mx-auto ${
          pixelate && "px-12 max-lg:px-6 max-md:px-3"
        } ${childClassName}`}
        style={{
          maxWidth: `${maxWidth}px`,
        }}
      >
        {children}
      </div>
    </section>
  );
};
