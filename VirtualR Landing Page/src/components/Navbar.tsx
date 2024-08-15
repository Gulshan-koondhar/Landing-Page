import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 flex justify-between item-center text-sm w-full">
        <div className="flex item-center justify-center flex-shrink-0 px-4">
          <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
          <span className="text-xl tracking-tight">VirtualR</span>
        </div>

        <div className="max-sm:hidden flex justify-center items-center">
          <ul className="flex gap-8 item-center py-2  text-white mr-8 text-md">
            <li>Features</li>
            <li>Workflow</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
          <div className="flex items-center justify-center gap-4 max-md:mt-4 max-md:ml-4">
            <button className="mr-5 border-2 px-2 py-2 rounded-md text-white">
              Sign in
            </button>
            <button className="bg-amber-500	px-2 py-2 rounded-md mr-5">
              Create an Account
            </button>
          </div>
        </div>

        {open && (
          <div className="flex justify-center items-center max-sm:flex-col max-sm:text-center max-sm:absolute max-sm:bg-black max-sm:backdrop-blur-lg max-sm:min-h-[50vh] max-sm:left-0 max-sm:top-12 max-sm:w-full max-sm:text-black max-sm:px-2">
            <ul className="flex gap-10 item-center py-2 max-sm:flex-col text-white mr-8">
              <li>Features</li>
              <li>Workflow</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
            <div className="flex items-center justify-center gap-4 mt-4 max-sm:text-center max-sm:items-center max-sm:flex-col">
              <button className="mr-5 border-2 px-2 py-2 rounded-md text-white">
                Sign in
              </button>
              <button className="bg-amber-500	px-2 py-2 rounded-md mr-5">
                Create an Account
              </button>
            </div>
          </div>
        )}
        <Menu
          className="hidden max-sm:flex mr-4 items-center"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </nav>
    </>
  );
};

export default Navbar;
