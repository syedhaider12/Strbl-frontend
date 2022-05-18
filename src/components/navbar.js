import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  
  return (
    <>
      <div className="w-full h-16 pb-0 mb-0 bg-black ">
        <div className="flex items-center justify-between w-full h-full md:flex">
          <div className="items-center w-5/6 md:flex md:flex-row md:justify-between ">
            <h1 className="pl-10 text-3xl font-bold text-red-600 ">STRBL</h1>
            <nav className="hidden text-white md:flex md:flex-row ">
              
             <button className="p-2 text-xs bg-red-600 rounded-full">Login / Signup</button>
            </nav>
          </div>
          <div
            className="flex px-4 md:hidden"
            onClick={() => {
              console.log("cliked");
              setMenuIcon(!menuIcon);
              console.log(menuIcon);
            }}
          >
            {!menuIcon ? (
              <MenuAlt2Icon className="w-5 text-white" />
            ) : (
              <XIcon className="w-5 text-white" />
            )}
          </div>
        </div>
        <nav
          className={
            !menuIcon
              ? "hidden"
              : "absolute bg-slate-500 w-full text-center flex flex-col text-white tracking-tighter  md:hidden"
          }
        >
         
        </nav>
      </div>
    </>
  );
}

export default Navbar;
