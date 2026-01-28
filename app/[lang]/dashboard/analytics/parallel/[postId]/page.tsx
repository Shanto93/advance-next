import Comments from "@/components/Comments";
import getPost from "@/utils/getPost";
import { Suspense } from "react";

const SinglePostParallel = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postIdNumber = parseInt(postId);

  //   const postPromise = getPost(postIdNumber);
  //   const commentsPromise = getComments(postIdNumber);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await getPost(postIdNumber);

  return (
    <div className="pt-2">
      <h1 className="text-xl font-semibold mb-2">{post?.title} </h1>
      <p>{post?.body} </p>

      <div className="border-t mt-4 pt-4">
        <h2 className="text-lg font-semibold underline">Comments:</h2>
        {/* Comments will be displayed here in the future */}
        <Suspense fallback={<div>Loading Comments...</div>}>
          <Comments postId={postIdNumber}></Comments>
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePostParallel;
