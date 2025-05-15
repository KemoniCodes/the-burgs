import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/hero2.png";
import Heading from "../../../public/heroHeading.png";

export default function Hero() {
  return (
    <div
      className='hero w-screen h-[94vh]'
      style={{
        backgroundImage: HeroImg ? `url(${HeroImg.src})` : "none",
      }}
    >
      <Image
        src={Heading}
        alt='heading'
        width={904}
        height={457}
        className='relative m-auto top-[20%]'
      />
    </div>
  );
}
