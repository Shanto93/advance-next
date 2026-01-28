interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts as IPost[];
};

export default getPosts;
