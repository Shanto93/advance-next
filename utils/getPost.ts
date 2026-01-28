const getPost = async (id: number = 1) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
};

export default getPost;
