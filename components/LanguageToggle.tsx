"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LOCALES = ["en", "bn"] as const;
type Locale = (typeof LOCALES)[number];

function detectLocale(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg as Locale)
    ? (seg as Locale)
    : "en";
}

function replaceLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;

  const first = parts[0];
  if ((LOCALES as readonly string[]).includes(first as Locale)) {
    parts[0] = nextLocale;
  } else {
    parts.unshift(nextLocale);
  }
  return "/" + parts.join("/");
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = detectLocale(pathname);
  const next: Locale = current === "en" ? "bn" : "en";

  const onToggle = () => {
    const nextPath = replaceLocale(pathname, next);
    const qs = searchParams.toString();
    router.replace(qs ? `${nextPath}?${qs}` : nextPath);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="border bg-white px-3 py-1 rounded-2xl hover:border-amber-600 hover:text-amber-600"
      title={`Switch to ${next.toUpperCase()}`}
    >
      {current.toUpperCase()}
    </button>
  );
}
