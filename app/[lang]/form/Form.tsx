"use client";
import { useActionState } from "react";
import { createProduct } from "./FormAction";

const FormPage = () => {
  // useActionState এর ব্যবহার
  const [state, formAction, isPending] = useActionState(createProduct, null);

  return (
    <div className="flex justify-center mt-10">
      <form
        action={formAction}
        className="flex flex-col bg-slate-100 w-full max-w-md border p-8 rounded-2xl shadow-xl space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-slate-700">
          Add New Product
        </h2>

        {/* Title Field */}
        <div className="flex flex-col">
          <input
            className={`border w-full px-5 py-2 rounded-full outline-none transition-all ${
              state?.errors?.title
                ? "border-red-500 ring-1 ring-red-500"
                : "border-gray-300"
            }`}
            placeholder="Product title"
            type="text"
            name="title"
          />
          {state?.errors?.title && (
            <span className="text-red-500 text-xs mt-1 ml-4">
              {state.errors.title[0]}
            </span>
          )}
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <input
            className={`border w-full px-5 py-2 rounded-full outline-none transition-all ${
              state?.errors?.description
                ? "border-red-500 ring-1 ring-red-500"
                : "border-gray-300"
            }`}
            placeholder="Product description"
            type="text"
            name="description"
          />
          {state?.errors?.description && (
            <span className="text-red-500 text-xs mt-1 ml-4">
              {state.errors.description[0]}
            </span>
          )}
        </div>

        {/* Success Message */}
        {state?.success && (
          <p className="bg-green-100 text-green-700 p-2 rounded-lg text-center text-sm">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className={`bg-blue-600 text-white font-semibold mt-3 px-3 py-2 rounded-full hover:bg-blue-700 transition-colors ${
            isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isPending ? "Processing..." : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
