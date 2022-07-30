import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Head>
        <title>Fonts | 3xpyre</title>
        <meta name="description" content="Created by https://0xcrow.com " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4 relative">
        {/* Header */}
        <Header />
        {/* Content */}
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl mb-12 -mt-12 font-bold uppercase">
          3xpyre Font Tester
        </h1>
        {/* input */}
        <input
          type="text"
          placeholder="Insert Text Here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-[#CED5E7] border-white rounded w-[95%] text-xl py-2 px-4 md:w-[33%] text-black font-bold"
        />

        {/* Result */}
        <p className="mt-8">Result</p>
        <h1 className="text-2xl md:text-3xl species mt-8 w-[80%] break-words">
          {text}
        </h1>
      </main>
    </>
  );
};

export default Home;

const Header: NextPage = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex  items-center px-[5%] h-24 justify-center md:justify-between">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-2xl ">3xpyre</h1>
      </div>
      {/* Navigation */}
      <nav className="hidden md:block">
        <ul className="space-x-8">
          <li className="font-bold text-xl float-left">Shop</li>
          <li className="font-bold text-xl float-left">Instagram</li>
          <li className="font-bold text-xl float-left">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
