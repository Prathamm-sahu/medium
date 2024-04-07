import { FC } from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 inset-x-0 px-10 py-2 bg-slate-100 border-b border-zinc-300 z-[10]">
      <Link to="/blogs" className="text-2xl font-extrabold cursor-pointer">
        Medium
      </Link>
      <div className="flex justify-center items-center">
        <Link to="/publish">
          <button className="flex rounded-full text-sm px-4 py-2 text-center me-2 mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium  ">
            <PlusCircle className="mr-1 h-5 w-5"/>
            New
          </button>
        </Link>
        <Avatar name="Pratham" size={"big"} />
      </div>
    </div>
  );
};

export default Navbar;
