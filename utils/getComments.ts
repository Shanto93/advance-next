import { wait } from "@/lib/wait";

const getComments = async (postId: number = 1) => {
    await wait(3000)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  const comments = await res.json();
  return comments;
};

export default getComments;
