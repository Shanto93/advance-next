import getComments from "@/utils/getComments";

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const Comments = async ({ postId }: { postId: number }) => {
  const comments: IComment[] = await getComments(postId);
  return (
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
  );
};

export default Comments;
