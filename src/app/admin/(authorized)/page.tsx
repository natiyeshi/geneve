import AdminNav from "./_components/AdminNav";
import { FcGoogle } from "react-icons/fc";
import { SiGoogleanalytics } from "react-icons/si";
const Pay = () => {
  return (
    <div className="w-full  relative px-6 pt-2 h-full overflow-auto">
      <AdminNav />
      <Section1 />
      <div className="flex flex-col mt-8">
        <div className="text-2xl font-black">Recent status</div>
        <div className=" text-adminText mt-1">
          Follow current status of your site
        </div>
      </div>
    </div>
  );
};

const Section1 = () => (
  <div className="flex flex-col mt-6">
    <div className="text-2xl z-10 font-black">Website Overview</div>
    <div className="z-10 text-adminText mt-1">
      You can checkout out your website over view here!
    </div>
    <div className="w-full flex gap-5 mt-5 z-10">
      <div className="hover:shadow-xl duration-200 cursor-pointer flex gap-2 relative overflow-hidden place-items-center px-5 py-3 rounded-lg bg-adminSecondary text-white">
        <div className="w-12 h-12 absolute bg-adminPrimary -top-5 -left-3 blur-xl z-0"></div>
        <div className="w-12 h-12 absolute bg-adminPrimary -bottom-5 -right-3 blur-[30px] z-0"></div>
        <FcGoogle className="text-[50px] z-10" />
        <div className="pt-2">
          <div className="text-xl font-bold">Google search Console</div>
          <div className="text-gray-100 text-sm">
            Check out your website search status
          </div>
        </div>
      </div>

      <div className="hover:shadow-xl duration-200 cursor-pointer flex gap-2 relative overflow-hidden place-items-center px-5 py-3 rounded-lg bg-adminSecondary text-white">
        <div className="w-12 h-12 absolute bg-adminPrimary -top-5 -left-3 blur-xl z-0"></div>
        <div className="w-12 h-12 absolute bg-adminPrimary -bottom-5 -right-3 blur-[30px] z-0"></div>
        <SiGoogleanalytics className="text-[50px] text-[#F9AB00] z-10" />
        <div className="pt-2">
          <div className="text-xl font-bold">Google Analytics</div>
          <div className="text-gray-100 text-sm">
            Check out your website search status
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pay;
