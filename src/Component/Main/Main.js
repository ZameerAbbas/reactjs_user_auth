import React from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";


const Main = () => {
  return (
    <div className=" h-[100vh] bg-slate-600">
      <div className="fixed right-7 top-7">
        <Link to="/" className="hover:text-white">
          <CiLogin size={30} />
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center  text-center h-[100vh]">
        <div>
          <h1 className=" text-5xl font-extrabold">Main</h1>
          <p className="text-2xl">main page after login</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
