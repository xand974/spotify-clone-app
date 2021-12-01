import React from "react";
import DynamicIcon from "./DynamicIcon";
import Link from "next/link";
import { navItems, playlists } from "../helpers/data";

export default function Sidebar() {
  return (
    <div className="py-5 flex-1 flex flex-col w-full bg-black h-full overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col items-start w-10/12 mx-auto">
        {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <a className="mb-3 group ">
              <DynamicIcon iconName={item.icon} />
              <span className="text-gray-500 group-hover:text-blue-300">
                {item.name}
              </span>
              {item.id % 3 === 0 && (
                <div className="pointer-events-none">
                  <br />
                </div>
              )}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-start w-10/12 mx-auto ">
          {playlists.map((playlist) => (
            <Link key={playlist.id} href={playlist.link}>
              <a className="mb-3 group ">
                <span className="text-gray-500 group-hover:text-blue-300">
                  {playlist.title}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
