"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome } from "react-icons/bi";
import { FaBloggerB } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";

export type Props = {
  name: string;
  link: string;
  Icon: any;
};

const links: Props[] = [
  {
    name: "Home",
    link: "/admin",
    Icon: BiHome,
  },
  {
    name: "Packages",
    link: "/admin/packages",
    Icon: MdCardTravel,
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
            pathname === link && "bg-primary/10 border-l-4 border-primary font-semibold text-black"
          } ps-5 py-2 hover:text-black text-gray-600 flex place-items-center gap-2 hover:bg-primary/10 duration-200`}
        >
          <Icon className="text-xl" />
          <div>{name}</div>
        </Link>
      ))}
    </>
  );
}
