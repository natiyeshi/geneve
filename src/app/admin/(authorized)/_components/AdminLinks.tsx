"use client";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillProduct } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { FaBloggerB } from "react-icons/fa6";
export interface Props {
  name: string;
  link: string;
  Icon: any;
}

const links: Props[] = [
  {
    name: "Home",
    link: "/admin",
    Icon: BiHome,
  },
  {
    name: "Products",
    link: "/admin/products",
    Icon: MdHomeRepairService,
  },
  {
    name: "Messages",
    link: "/admin/message",
    Icon: AiOutlineMessage,
  },
  {
    name: "Partners",
    link: "/admin/partners",
    Icon: FaPeopleGroup,
  },
  {
    name: "Blog",
    link: "/admin/blog",
    Icon: FaBloggerB,
  },

];

export default function AdminLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ Icon, link, name }) => (
        <Link
          key={name}
          href={link}
          className={`${
            pathname == link && "bg-adminPrimary/50  border-l-4 border-adminPrimary font-semibold text-black"
          } ps-5 py-2 hover:text-black text-gray-600 flex place-items-center gap-2 hover:bg-adminPrimary/50  duration-200`}
        >
          <Icon className="text-xl" />
          <div>{name}</div>
        </Link>
      ))}
    </>
  );
}
