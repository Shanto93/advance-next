import React from "react";
import blogs from "./../../data/blogs.json";
import BlogButton from "@/components/BlogButton";

const BlogsPage = () => {
  return (
    <div>
      <h2 className="text-bas mt-3">This is Blogs Page</h2>

      <h1 className="text-2xl text-center font-bold my-5">All Blogs</h1>

      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <div className="border px-5 py-4 rounded-xl" key={index}>
            <h1 className="font-bold mb-2">{blog.blog_title} </h1>
            <h1 className="text-sm">{blog.blog_description} </h1>
            <div className="w-full mx-auto flex justify-center items-center">
              <BlogButton id={blog.id}></BlogButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
