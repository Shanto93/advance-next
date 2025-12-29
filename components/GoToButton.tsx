"use client";

import { useRouter } from "next/navigation";

interface IButtonProps {
  className: string;
  children: string;
}

const GoToButton = ({ className, children }: IButtonProps) => {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/dashboard/settings");
  };

  return (
    <button
      onClick={handleRouting}
      className={`${className} text-green-600 border border-green-600 px-3 py-2 rounded-xl`}
    >
      {children}
    </button>
  );
};

export default GoToButton;
