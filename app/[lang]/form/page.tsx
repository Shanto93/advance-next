import FormPage from "./Form";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string; description?: string }>;
}) => {
  const { title, description } = await searchParams;
  console.log(title, description);
  
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">This is Form Page</h2>
      <FormPage></FormPage>
    </div>
  );
};

export default ProductPage;
