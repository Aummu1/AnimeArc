import React from "react";
import Image from "next/image";

function Home_1() {
  return (
    <div className="welcome flex flex-col"> 
      <div className="flex justify-center items-center flex-grow"> 
          <p className="text-5xl">Welcome to AnimeArc</p>
      </div>
      <div className="flex justify-center items-end">
          <Image src="/image/izana-kurokawa.png" alt="Logo" width={1100} height={1100} />
      </div>
    </div>
  );
}

export default Home_1;
