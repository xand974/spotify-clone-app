import React from "react";
import Image from "next/image";
export default function PlaylistItem() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center">
        <p className="text-gray-500 mr-5">1</p>
        <div className="flex items-center">
          <div className="relative w-10 h-10">
            <Image
              layout="fill"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1638309178936-9ed4f10fe3c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>
          <div className="flex flex-col ml-2">
            <strong className="text-white">Amnésie</strong>
            <span className="text-gray-500 text-sm">Damso</span>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm">
        <p>Batterie Faible</p>
      </div>
      <div className="">
        <p className="text-gray-500 text-sm">3:31</p>
      </div>
    </div>
  );
}
