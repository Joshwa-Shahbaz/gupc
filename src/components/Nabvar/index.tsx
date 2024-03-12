import Link from "next/link";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";

const Navbar = () => {
  return (
    <ContainerWrapper>
      <nav className="flex justify-between  items-center bg-slate-800 p-4 text-white mt-5">
        <Link className="font-bold" href="/">
          JSCoding..
        </Link>
        <Link className="bg-white p-2 text-black" href="/addTopics">
          Add Topics
        </Link>
      </nav>
    </ContainerWrapper>
  );
};

export default Navbar;
