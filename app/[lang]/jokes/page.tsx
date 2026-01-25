import { getJokes } from "@/utils/getJokes";
// import { cookies } from "next/headers";

export const revalidate = 10;

const Jokes = async () => {
  // const theme = (await cookies()).get('theme')
  const jokes = await getJokes();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1>{jokes.value} </h1>
      </div>
    </div>
  );
};

export default Jokes;
