import blogs from "../../../../data/blogs.json";

interface IBlog {
  id: number;
  blog_title: string;
  blog_description: string;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog_id = parseInt(id);
  const blog: IBlog | undefined = blogs.find((blog) => blog.id === blog_id);

  return (
    <div>
      <h1>This is Blog {blog_id}</h1>
      <p>{blog?.blog_title} </p>
      <p>{blog?.blog_description} </p>
    </div>
  );
};

export default BlogDetailsPage;
