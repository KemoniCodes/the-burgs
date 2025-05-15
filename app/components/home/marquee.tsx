import React from "react";
import Image from "next/image";
import WordBanner from "../../../public/blueBanner.svg";
import Marquee from "../../components/animata/container/marquee";

export default function WordMarquee() {
  return (
    <div className='blueBanner py-2 overflow-hidden'>
      <Marquee>
        <Image src={WordBanner} alt='word banner' />
      </Marquee>
    </div>
  );
}
