"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const LOCALES = ["en", "bn"] as const;
type Locale = (typeof LOCALES)[number];

function detectLocale(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg as Locale)
    ? (seg as Locale)
    : "en";
}

function withLocale(path: string, locale: Locale) {
  if (path.startsWith(`/${locale}`)) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

export default function NavLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  // console.log(pathname);
  const locale = detectLocale(pathname);
  const href = withLocale(path, locale);
  // console.log(href);
  const isActive = pathname === href;

  return (
    <Link className={isActive ? "text-blue-700" : ""} href={href}>
      {children}
    </Link>
  );
}
