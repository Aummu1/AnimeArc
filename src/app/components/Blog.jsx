import React from "react";
import Image from "next/image";

function Blog() {
  return (
    <div>
        <div id="BLOG" className="Blog">
            <div className="flex justify-center">
                <p className="m-5 text-xl"><span className="text-gray-500">Anime</span> Blog</p>
            </div> 
            <div className="box-Blog flex justify-around">
                <div className="Blog-l">
                    <Image className="img" src="/image/marin.png" alt="Logo"  width={2000} height={600} />
                </div>
                <div className="Blog-r">
                    <p className="text-4xl"><span className="text-gray-500">All Anime</span> Blog</p>
                    <p>In this blog, I will take you all to explore anime from my library. Gathered from watching various genres, including action, drama, fantasy, and romance, whether you like adventures in different-dimensional worlds. or heart-warming stories I&apos;m sure there&apos;s something exciting waiting for you!</p>
                    <button className="bg-red-700 p-2 rounded-lg w-20 text-white	">View All</button>
                </div>
            </div>
        </div>

        <div id="DIDYOUKNOW" className="Blog">
            <div className="flex justify-center">
                <p className="m-5 text-xl"><span className="text-gray-500">Anime</span> Did You Know?</p>
            </div> 
            <div className="box-Blog2 flex justify-around">
                <div className="Blog-l2">
                    <p className="text-4xl"><span className="text-gray-500">Anime</span> Did You Know?</p>
                    <p>Welcome to Anime Did You Know? Here you&apos;ll find fun facts about anime that might surprise you! This menu was created to share interesting information and secrets behind anime that you may not have known before.</p>
                    <button className="bg-red-700 p-2 rounded-lg w-20 text-white	">View All</button>
                </div>
                <div className="Blog-r2">
                    <Image className="img" src="/image/dm.png" alt="Logo"  width={2000} height={600} /> 
                </div>
            </div>
        </div>

        <div id="ABOUT_ME" className="Blog">
            <div className="flex justify-center">
                <p className="m-5 text-xl"><span className="text-gray-500">About</span> Me</p>
            </div> 
            <div className="box-Blog flex justify-around">
                <div className="Blog-l">
                    <Image className="img" src="/image/999.png" alt="Logo"  width={2000} height={600} />
                </div>
                <div className="Blog-r">
                    <p className="text-4xl"><span className="text-gray-500">About</span> Me</p>
                    <p>In this blog, I hope to share my experiences and thoughts about anime. along with discovering new stories together. If you want to get to know me Click here and join us on this journey together!</p>
                    <a href="https://exsinnot.com/Aummu/"><button className="bg-red-700 p-2 rounded-lg w-20 text-white">View All</button></a>
                </div>
            </div>
        </div>

        <Image className="img" src="/image/mahito.png" alt="Logo"  width={2000} height={600} />
    </div>
  );
}

export default Blog;
