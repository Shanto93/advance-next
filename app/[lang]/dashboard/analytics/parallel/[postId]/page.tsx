import getComments from "@/utils/getComments";
import getPost from "@/utils/getPost";

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const SinglePostParallel = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postIdNumber = parseInt(postId);
  // Fetch post data serially
  const postPromise = getPost(postIdNumber);

  // Fetch comments data serially
  const commentsPromise = getComments(postIdNumber);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className="pt-2">
      <h1 className="text-xl font-semibold mb-2">{post?.title} </h1>
      <p>{post?.body} </p>

      <div className="border-t mt-4 pt-4">
        <h2 className="text-lg font-semibold underline">Comments:</h2>
        {/* Comments will be displayed here in the future */}
        <div className="mt-2">
          {comments.length > 0 ? (
            <div>
              {comments.map((comment: IComment, index: number) => (
                <div key={comment.id} className="mb-3">
                  <h3 className="">
                    {index + 1}. {comment.name}{" "}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            "No Comments Available"
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePostParallel;
