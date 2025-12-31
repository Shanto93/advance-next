import GoToButton from "@/components/GoToButton";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

const HomePage = () => {
  return (
    <div className="ml-10">
      <h2 className="mt-2">Home Page</h2>
      <GoToButton className="mt-2">Go to Settings</GoToButton>
    </div>
  );
};

export default HomePage;
