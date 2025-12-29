"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  path: string;
  children: string;
};

const NavLink = ({ path, children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive: boolean = path === pathName;

  return (
    <Link className={isActive ? "text-blue-600" : ""} href={path}>
      {children}
    </Link>
  );
};

export default NavLink;
