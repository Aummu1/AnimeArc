import React from "react";
import Header from "./components/Header";
import Home_1 from "./components/Home_1";
import About_us from "./components/About_Us";
import Best from "./components/Best";
import Img_5 from "./components/img_5";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-black flex flex-col w-full">
        <Header />
        <Home_1 />
      </div>
      <About_us />
      <Best />
      <Img_5 />
      <Blog />
    </div>
  );
}

