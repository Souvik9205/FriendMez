import { UserButton } from "@clerk/nextjs";
import ToggleMode from "./ToggleMode";

export const Navbar = () => {
  return (
    <div className="backdrop-blur-md bg-gradient-to-tr from-white/10 to-black/70 border-b border-slate-700 shadow-md sticky z-50 top-0">
      <div className="flex justify-between items-center px-4 md:px-16 py-3">
        <div className="flex items-center">
          <div className="text-3xl pl-2 md:pl-4 flex flex-col justify-center cursor-pointer text-white font-semibold hover:text-gray-300 transition duration-300">
            FriendMez
          </div>
        </div>
        <div className="flex items-center space-x-6 md:pr-6">
          <div>
            <ToggleMode />
          </div>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};
