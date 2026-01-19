import { wait } from "@/lib/wait";

const QuizPage = async () => {
  await wait(4000);
  return (
    <div className="bg-emerald-500 border-2 w-full h-64 flex items-center justify-center">
      <h2 className="text-white">Quiz Page</h2>
    </div>
  );
};

export default QuizPage;
