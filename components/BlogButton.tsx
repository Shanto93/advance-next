"use client";

import { useRouter } from "next/navigation";

interface IBlogProps {
  id: number;
}

const BlogButton = ({ id }: IBlogProps) => {
  const router = useRouter();
  const handleBlogNavigation = (id: number) => {
    router.push(`/blogs/${id}`);
  };
  return (
    <button
      onClick={() => handleBlogNavigation(id)}
      className="px-3 py-2 border rounded-3xl mt-3 mx-auto hover:bg-amber-500 hover:text-white"
    >
      Visit Blog {id}
    </button>
  );
};

export default BlogButton;
