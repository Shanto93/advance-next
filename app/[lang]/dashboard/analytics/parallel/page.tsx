import getPosts from "@/utils/getPosts";
import Link from "next/link";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ParallelDataFetchingPage = async () => {
  const posts = await getPosts();
  return (
    <div>
        <h1 className="text-xl underline mb-3">All Posts:</h1>
      {posts.slice(0,5).map((post: IPost) => (
        <div key={post.id} className="mb-4">
          <Link href={`/dashboard/analytics/parallel/${post.id}`}><h2 className=" mb-2">{post.id}. {post.title}</h2></Link>
        </div>
      ))}
    </div>
  );
};

export default ParallelDataFetchingPage;
