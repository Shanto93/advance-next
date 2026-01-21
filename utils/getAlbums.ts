export const getAlbums = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  //   console.log(data);
  return data;
};
