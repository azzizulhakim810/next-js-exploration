"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLink({ path, children }) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link className={active ? "text-green-500" : "text-white"} href={path}>
      {children}
    </Link>
  );
}

export default CustomLink;
