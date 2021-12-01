import React from "react";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
export default function login({ providers }) {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <button className="relative w-52 h-52">
          <Image
            src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
            objectFit="cover"
            layout="fill"
          />
        </button>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="text-white border-b-2 border-green-500 text-3xl font-mono"
          >
            <button>Login avec {provider.name}y</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
