import React from "react";
import Image from "next/image";

function Img_5() {
  return (
    <div className="box_img">
        <Image className="img1 mt-48" src="/image/1.png" alt="Logo"  width={300} height={300} />
        <Image className="img2 mt-20 mb-36" src="/image/2.png" alt="Logo"  width={300} height={300} />
        <Image className="img3 mt-16 mb-28" src="/image/3.png" alt="Logo"  width={300} height={300} />
        <Image className="img4 mt-52 mb-15" src="/image/4.png" alt="Logo"  width={300} height={300} />
        <Image className="img5 mt-20 mb-52" src="/image/5.png" alt="Logo"  width={300} height={300} />
    </div>
  );
}

export default Img_5;
