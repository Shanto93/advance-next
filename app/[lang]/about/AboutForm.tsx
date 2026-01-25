import { addUser } from "@/server/actions/users.actions";

const AboutForm = async () => {
  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    await addUser(formData);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        action={handleFormSubmit}
        className="w-full max-w-md bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-500 mt-2 text-sm">
            We would love to hear from you.
          </p>
        </div>

        <div className="space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              placeholder="John Doe"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              placeholder="john@example.com"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 transform"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AboutForm;
