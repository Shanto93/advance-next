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
    <nav className="w-full px-4 md:px-6 my-3">
      <div
        className="
        p-4 border-2 border-b-black font-semibold 
        flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0
        rounded-3xl lg:rounded-full
        max-w-7xl mx-auto
      "
      >
        {/* Logo Section */}
        <div className="lg:ml-6">
          <h1 className="text-xl md:text-2xl">{dict.navbar.logo}</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-base">
          {links.map((l) => (
            <li key={l.path}>
              <NavLink path={`/${lang}${l.path === "/" ? "" : l.path}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons (Language + Login) */}
        <div className="lg:mr-6 flex items-center gap-3">
          <Suspense fallback={<div>...</div>}>
            <LanguageToggle />
          </Suspense>

          <button className="border bg-white px-4 py-1.5 rounded-2xl hover:border-amber-600 hover:text-amber-600 transition-colors">
            {dict.navbar.login}
          </button>
        </div>
      </div>
    </nav>
  );
}
