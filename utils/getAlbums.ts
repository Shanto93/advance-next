export const getAlbums = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
//   console.log(data);
  return data
};
