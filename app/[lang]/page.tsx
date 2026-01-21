import { notFound } from "next/navigation";

import type { Album, Locale, PageParams } from "@/types/Home/home.types";
import { getAlbums } from "@/utils/getAlbums";
import Link from "next/link";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: { params: PageParams }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  const dict = await getDictionary(locale);
  const albums: Album[] = await getAlbums();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <button className="border bg-amber-300 text-white px-3 py-2 rounded">
          {dict.products.cart}
        </button>
        <Link href="/jokes">
          <button className="border bg-amber-700 text-white px-3 py-2 rounded">Read Jokes</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="border rounded p-3 space-y-2">
            {/* <Image
              src={album.thumbnailUrl}
              alt={album.title}
              width={150}
              height={150}
            /> */}
            <p className="text-sm">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
