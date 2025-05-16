"use client";
import React from "react";
import Image from "next/image";
import Square from "../../../public/squareChat.png";
import Circle from "../../../public/circleChat.png";
import Red from "../../../public/redPrimary.svg";
import Green from "../../../public/greenFries.svg";
import { motion } from "motion/react";

export default function Press() {
  return (
    <div className='press border-y-black border-y-[7px] border-y-solid bg-neonPink pt-20 lg:h-[160vh] h-[110vh]'>
      <div className='squareChat space-y-6 lg:w-[55%] w-[80%] relative lg:left-28 left-8'>
        <Image
          src={Square}
          alt='square chat'
          className='w-full drop-shadow-[18px_14px_0_black]'
        />
        <h2 className='absolute lg:top-4 -top-2 left-1/2 -translate-x-[55%] translate-y-[23%] text-neonPink text-center lg:text-[32px]  lg:leading-[56px] leading-[26px] px-4 w-max'>
          &quot;When it comes to
          <br /> flavor, The ‘Burgs does it
          <br /> right. From the smash to
          <br /> classic meaty burgs, the
          <br /> tastes are unbeatable.&quot;
        </h2>
        <button className='h3 text-neonPink !font-semibold py-4 px-9 bg-bunBeige capitalize rounded-[15px] border-4 border-black drop-shadow-[14px_10px_0_black]'>
          la mag
        </button>
      </div>
      <motion.div
        className='absolute right-0 lg:w-[35%] w-[65%] -mt-[100%] lg:-mt-[40%]'
        animate={{ rotate: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <Image src={Red} alt='red primary logo' />
      </motion.div>

      <div className='circleChat space-y-6 lg:w-[55%] w-[80%] relative lg:right-28 right-18 float-right lg:mt-0 mt-20'>
        <Image
          src={Circle}
          alt='circle chat'
          className='w-full drop-shadow-[18px_14px_0_black]'
        />
        <h2 className='absolute lg:top-4 -top-4  left-1/2 -translate-x-[50%] translate-y-[50%] text-neonPink text-center px-4 w-max lg:text-[32px]  lg:leading-[56px] leading-[26px]'>
          {/* line-height: 26px;
fonts 24px */}
          &quot;When it comes to
          <br /> flavor, The ‘Burgs does it
          <br /> right. From the smash to
          <br /> classic meaty burgs, the
          <br /> tastes are unbeatable.&quot;
        </h2>
        <button className='h3 text-neonPink !font-semibold py-4 px-9 bg-bunBeige capitalize rounded-[15px] border-4 border-black drop-shadow-[14px_10px_0_black] relative float-right left-12'>
          la mag
        </button>
      </div>
      <motion.div
        className='absolute lg:left-8 left-4 mt-[50vh]'
        animate={{ rotate: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <Image src={Green} alt='green fries basket sticker' />
      </motion.div>
    </div>
  );
}
