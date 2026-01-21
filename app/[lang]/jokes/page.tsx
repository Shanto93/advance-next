import { getJokes } from "@/utils/getJokes";

const Jokes = async () => {
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
