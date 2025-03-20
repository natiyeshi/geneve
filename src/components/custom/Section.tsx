export const Section = ({
  children,
  className = "",
  childClassName = "",
  h = true,
  maxWidth = "1500",
  pixelate = false,
}: {
  children: any;
  childClassName?: string;
  className?: string;
  maxWidth?: string;
  h?: boolean;
  pixelate?: boolean;
}) => {
  return (
    <section
      className={`${className} ${
        h && "max-2xl:min-h-screen 2xl:py-2"
      } w-full flex`}
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
