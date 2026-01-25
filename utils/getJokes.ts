export async function getJokes() {
  const res = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch jokes");
  }
  const data = await res.json();
  return data;
}
