"use client";

import { useFormStatus } from "react-dom";

const AboutButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 transform"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default AboutButton;
