import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CiAlarmOn, CiHome, CiLogin } from "react-icons/ci";

const Main = () => {
  return (
    <div className=" h-[100vh] bg-slate-600">
      <div className="fixed right-7 top-7">
        <Link to="/" className="hover:text-white">
          <CiLogin size={30} />
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center  text-center h-[100vh]">
        <div className="flex  self-stretch">
          <nav className="flex flex-col h-[100vh] p-12 border">
            <Link to="Home" className=" flex items-center ">
            <CiHome />
              <p className="px-2">Home</p>
            </Link>
            <Link to="About" className="p-2 ">
            <CiAlarmOn />
              About
            </Link>
          </nav>
          <div className="h-[100vh] border w-full">
            <div className="p-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
