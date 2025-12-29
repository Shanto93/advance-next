import NavLink from "@/components/NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-5 p-4 border-b border-b-black">
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
      </ul>
    </div>
  );
};

export default Navbar;
