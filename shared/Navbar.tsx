import NavLink from "@/components/NavLink";

const Navbar = () => {
  return (
    <div className="p-4 border-2 rounded-full border-b-black font-semibold flex justify-between items-center">
      <div className="ml-10">
        <h1>Logo</h1>
      </div>
      <ul className="flex gap-5 ">
        <li>
          <NavLink path="/">Home</NavLink>
        </li>
        <li>
          <NavLink path="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink path="/dashboard/analytics">Analytics</NavLink>
        </li>
        <li>
          <NavLink path="/dashboard/settings">Settings</NavLink>
        </li>
        <li>
          <NavLink path="/blogs">Blogs</NavLink>
        </li>
      </ul>
      <div className="mr-10">
        <button className="border bg-white px-3 py-1 rounded-2xl hover:border-amber-600 hover:text-amber-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
