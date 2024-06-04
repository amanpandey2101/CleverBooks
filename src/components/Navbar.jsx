import { useState } from "react";

const navOptions = [
  "Product",
  "Pricing",
  "Industry",
  "Customer Stories",
  "About",
  "Blog",
];

function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <div className="sticky w-full top-0 flex lg:justify-around px-s28 py-2 text-lg bg-black text-white">
      <div className="ml-3 lg:ml-0 space-x-4 flex items-center">
        <span>Logo</span>
        <span className="text-4xl">CleverBooks</span>
      </div>
      {/*  */}
      <div className="bg-red-200s hidden lg:flex items-center gap-16">
        {navOptions.map((option, index) => (
          <div key={index} className="hover:cursor-pointer hover:bg-white hover:text-purple-500 p-2 rounded-lg transition-all ease-in-out duration-200">{option}</div>
        ))}
      </div>
      {/*  */}
      <div className="bg-red-200s hidden lg:flex items-center gap-10">
        <button className="text-purple-500 font-semibold text-xl">Login</button>
        <button className="bg-gradient-to-br from-orange-500 to-purple-600 py-4 px-10 rounded-full text-xl font-semibold">
          Talk to Us
        </button>
      </div>

      {/* Mobile device */}
      <div
        className="flex lg:hidden ml-auto mr-5 text-4xl"
        onClick={() => setIsSidebar(!isSidebar)}
      >
        {isSidebar ? "x" : "="}
      </div>

      <div
        className={`lg:hidden absolute  transition-transform transform ${
          isSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-gray-950 shadow-lg h-screen w-[60%] top-0`}
      >
        <div className="p-10 flex flex-col gap-5">
          <div className="text-3xl">CREST</div>
          {navOptions.map((option, index) => (
            <div key={index} className="text-gray-300">{option}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
