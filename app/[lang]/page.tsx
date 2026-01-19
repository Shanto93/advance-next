import Image from "next/image";
import { notFound } from "next/navigation";

import { getAlbums } from "@/utils/getAlbums";
import { getDictionary, hasLocale } from "./dictionaries";

export type Album = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};


type Locale = "en" | "bn";

// Next 15 style (params is Promise)
type PageParams = Promise<{ lang: string }>;

export default async function Page({ params }: { params: PageParams }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;

  const dict = await getDictionary(locale);
  const albums: Album[] = await getAlbums();

  return (
    <div className="p-6 space-y-6">
      <button className="border px-3 py-2 rounded">
        {dict.products.cart}
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="border rounded p-3 space-y-2">
            <Image
              src={album.thumbnailUrl}
              alt={album.title}
              width={150}
              height={150}
            />
            <p className="text-sm">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
