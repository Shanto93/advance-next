import { getDictionary, hasLocale } from "@/app/[lang]/dictionaries";
import LanguageToggle from "@/components/LanguageToggle";
import NavLink from "@/components/NavLink";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Navbar({ lang }: { lang: string }) {
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const links = [
    { label: dict.navbar.home, path: "/" },
    { label: dict.navbar.parallel, path: "/parallel-dashboard" },
    { label: dict.navbar.about, path: "/about" },
    { label: dict.navbar.analytics, path: "/dashboard/analytics" },
    { label: dict.navbar.settings, path: "/dashboard/settings" },
    { label: dict.navbar.blogs, path: "/blogs" },
    { label: dict.navbar.jokes, path: "/jokes" },
  ];

  return (
    <div className="p-4 border-2 rounded-full border-b-black font-semibold flex justify-between items-center">
      <div className="ml-10">
        <h1>{dict.navbar.logo} </h1>
      </div>

      <ul className="flex gap-5">
        {links.map((l) => (
          <li key={l.path}>
            <NavLink path={`/${lang}${l.path === "/" ? "" : l.path}`}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mr-10 flex items-center gap-3">
        <Suspense fallback={<div>...</div>}>
          <LanguageToggle />
        </Suspense>

        <button className="border bg-white px-3 py-1 rounded-2xl hover:border-amber-600 hover:text-amber-600">
          {dict.navbar.login}
        </button>
      </div>
    </div>
  );
}
