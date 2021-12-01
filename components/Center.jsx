import React from "react";
import styles from "../styles/Center.module.css";
import PlaylistItem from "./PlaylistItem";
import Image from "next/image";
import Profile from "./Profile";

export default function Center() {
  return (
    <div className="flex-6 bg-black flex flex-col h-full ">
      <div className={styles.top}>
        <div className="flex-2 flex items-end">
          <div className="flex items-end">
            <div className="relative w-40 h-40">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1638341474819-a335ae3423af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                layout="fill"
              />
            </div>
            <div className="flex flex-col ml-3">
              <p className="text-white">PLAYLIST</p>
              <h1 className="text-4xl text-white">
                <strong>Music for Coding Focus</strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Profile />
        </div>
      </div>
      <div className="flex-4 mx-5 mt-10 overflow-y-scroll overflow-x-none">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </div>
    </div>
  );
}
