const Widget = ({
  className = "",
  varient = "secondary",
  aos = "fade-up",
  name,
  Icon,
}: {
  className?: string;
  varient?: "primary" | "secondary";
  name: string;
  aos?: string | null;
  Icon: any;
}) => {
  const cls = varient == "primary" ? "bg-primary text-white" : "bg-white";
  return (
    <div
      data-aos={aos}
      data-aos-offset="150"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
      className={`${cls} flex w-fit gap-2 px-2 py-1 rounded-3xl border shadow hover:shadow hover:shadow-primary duration-150  shadow-primary border-blue-500  text-black text-sm -right-[10%] ${cls} ${className}`}
    >
      <div
        className={`w-7 h-7 rounded-full flex ${
          varient == "primary" ? "bg-gray-50/40" : " bg-primary/20"
        }`}
      >
        <Icon
          className={`${
            varient == "primary" ? "text-white" : "text-primary"
          } text-xl  m-auto`}
        />
      </div>
      <div className="my-auto text-xs">{name}</div>
    </div>
  );
};

export default Widget;
