import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="The non-official clone of Spotify! Listen to your music everywhere"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full">
        <Sidebar />
        <Center />
      </main>
      <div>{/*Player*/}</div>
    </div>
  );
}
