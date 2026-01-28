import getComments from "@/utils/getComments";
import getPost from "@/utils/getPost";

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const SinglePostSerial = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postIdNumber = parseInt(postId);
  // Fetch post data serially
  const post = await getPost(postIdNumber);

  // Fetch comments data serially
  const comments = await getComments(postIdNumber);

  return (
    <div className="pt-2">
      <h1 className="text-xl font-semibold mb-2">{post.title} </h1>
      <p>{post.body} </p>

      <div className="border-t mt-4 pt-4">
        <h2 className="text-lg font-semibold underline">Comments:</h2>
        {/* Comments will be displayed here in the future */}
        <div className="mt-2">
          {comments.map((comment: IComment, index: number) => (
            <div key={comment.id} className="mb-3">
              <h3 className="">
                {index + 1}. {comment.name}{" "}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePostSerial;
