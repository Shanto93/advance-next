import { wait } from "@/lib/wait";

const AssignmentPage = async() => {
    await wait(5000);
  return (
    <div className="bg-blue-700 border-2 w-full h-64 flex items-center justify-center">
      <h1 className="text-white">Assignment Page</h1>
    </div>
  );
};

export default AssignmentPage;
