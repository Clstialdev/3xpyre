import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const GLOBAL_FONTS = [
  "ARKXEM-ULTRA",
  "BLADEVII-PRO",
  "KRYPTONIUM-MASTER",
  "NANOVIRUS-ALPHA",
  "species",
];

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [outputFont, setOutputFont] = useState(GLOBAL_FONTS[0]);

  const getIndexOfCurrentFont = (currentFont = "species") => {
    return GLOBAL_FONTS.indexOf(currentFont);
  };

  const router = useRouter();
  const { font: fontQueryValue } = router.query;

  useEffect(() => {
    const tempFontArray = GLOBAL_FONTS.map((font) => font.toUpperCase());
    const font = fontQueryValue?.toString().toUpperCase();
    if (font && tempFontArray.indexOf(font.toString()) > 0) {
      setOutputFont(font.toString());
    }
  }, [fontQueryValue]);

  return (
    <>
      <Head>
        <title>Fonts | 3xpyre</title>
        <meta name="description" content="Created by https://0xcrow.com " />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4 relative">
        {/* Header */}
        <Header />
        {/* Content */}
        {/* Heading */}
        <h1 className="text-xl md:text-5xl mb-12 -mt-12 font-bold uppercase text-center">
          ﹝ TYPE PORTAL ﹞
        </h1>

        {/* drropdown Menu */}
        <p>Select Font</p>

        <div className="mt-4 flex justify-between items-center space-x-8 select-none w-[95%] md:w-[33%]">
          <div
            className="p-4 bg-[#ced5e7] rounded text-black hover:cursor-pointer"
            onClick={() =>
              setOutputFont(
                (currentFont) =>
                  GLOBAL_FONTS[
                    (getIndexOfCurrentFont(currentFont) + 1) %
                      GLOBAL_FONTS.length
                  ]
              )
            }
          >
            {"<"}
          </div>
          <p className="text-xl text-center">{outputFont}</p>
          <div
            className="p-4 bg-[#ced5e7] rounded text-black hover:cursor-pointer"
            onClick={() =>
              setOutputFont(
                (currentFont) =>
                  GLOBAL_FONTS[
                    (GLOBAL_FONTS.length +
                      ((getIndexOfCurrentFont(currentFont) - 1) %
                        GLOBAL_FONTS.length)) %
                      GLOBAL_FONTS.length
                  ]
              )
            }
          >
            {">"}
          </div>
        </div>

        {/* input */}
        <p className="mt-8">EXPERIMENTAL TEXT</p>
        <input
          type="text"
          placeholder="(EXPERIMENTAL TEXT)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-[#CED5E7] border-white rounded w-[95%] text-lg py-2 px-4 md:w-[33%] text-black font-bold sans-serif"
        />

        {/* Result */}
        <p className="mt-8">SEQUEL</p>
        <h1
          style={{ fontFamily: outputFont }}
          className="text-2xl md:text-3xl mt-8 w-[80%] break-words text-center select-none"
        >
          {text}
        </h1>

        <Footer />
      </main>
    </>
  );
};

export default Home;

const Header: NextPage = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex  items-center px-[5%] justify-center ">
      {/* Logo */}
      <a href="https://3xpyre.com">
        <div className="h-36 w-36 relative mt-12">
          <Image src="/logo.jpg" alt="" layout="fill" objectFit="contain" />
        </div>
      </a>
      {/* Navigation */}
      {/* <nav className="hidden md:block">
        <ul className="space-x-8">
          <li className="font-bold text-xl float-left">Shop</li>
          <li className="font-bold text-xl float-left">Instagram</li>
          <li className="font-bold text-xl float-left">Contact</li>
        </ul>
      </nav> */}
    </header>
  );
};

const Footer: NextPage = () => {
  return (
    <header className="absolute bottom-0 left-0 w-full flex  items-center px-[5%] justify-center ">
      {/* Logo */}
      <div className="relative mb-4 w-full flex justify-center items-center">
        <p>
          ALL RIGHTS RESERVED{" "}
          <a href="https://3xpyre.com" className="underline">
            3XPYRE
          </a>
        </p>
      </div>
    </header>
  );
};
