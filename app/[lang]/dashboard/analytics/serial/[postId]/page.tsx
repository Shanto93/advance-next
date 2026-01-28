import getPost from "@/utils/getPost";

const SinglePostSerial = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postIdNumber = parseInt(postId);
  const post = await getPost(postIdNumber);

  return (
    <div className="border-b pb-4 pt-2">
      <h1 className="text-xl font-semibold mb-2">{post.title} </h1>
      <p>{post.body} </p>
    </div>
  );
};

export default SinglePostSerial;
