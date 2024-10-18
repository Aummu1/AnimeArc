import React from "react";
import Image from "next/image";

function About_us() {
  return (
    <div id="ABOUT_US" className="About">
      <div className="flex justify-center">
        <p className="m-5 text-xl">About Us</p>
      </div> 
        <div className="box-about flex justify-around">
            <div className="About-l">
              <p>
                <span className="block text-4xl">AnimeArc</span>
                <span className="block text-3xl font-akshar">Anime <span className="text-gray-500">The Gateway to Another World.</span></span>
                AnimeArc was created as a personal space for storing anime archives, both those I&apos;ve watched and those I haven&apos;t. It also serves as a place to recommend anime to others who are looking for something new to watch and discover what they might like.
              </p>
            </div>
            <div className="About-r">
                <Image className="img" src="/image/friren.png" alt="Logo"  width={500} height={500} />
            </div>
        </div>
    </div>
  );
}

export default About_us;
