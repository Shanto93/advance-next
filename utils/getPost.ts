import { wait } from "@/lib/wait";

const getPost = async (id: number = 1) => {
  await wait(2000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
};

export default getPost;
