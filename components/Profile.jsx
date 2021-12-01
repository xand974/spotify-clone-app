import React from "react";
import Image from "next/image";
import { KeyboardArrowDown } from "@mui/icons-material";
export default function Profile() {
  return (
    <div className="bg-black flex items-center h-12 px-2 py-3 rounded-2xl mt-5">
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1638344435939-b2d44c8ea302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="current user of the app"
          layout="fill"
        />
      </div>

      <span className="text-white mx-2 text-sm">Alexandre Malet</span>
      <button className="bg-none cursor-pointer">
        <KeyboardArrowDown className="text-white" fontSize="large" />
      </button>
    </div>
  );
}
