"use client";
import React from "react";
import Image from "next/image";
import Post1 from "../../../public/post1.png";
import Post2 from "../../../public/post2.png";
import Post3 from "../../../public/post3.png";
import Post4 from "../../../public/post4.png";
import Marquee from "../animata/container/marquee";
import { motion } from "motion/react";

export default function Hello() {
  return (
    <div className='sayHello w-full py-52 border-b-black border-b-[7px] border-b-solid'>
      <h1 className='text-retroBlue uppercase w-full text-center mb-32'>
        SAY HELLO @theburgs
      </h1>
      <div className='igPosts flex justify-center lg:gap-6 gap-2 overflow-x-hidden !overflow-y-visible py-5'>
        <Marquee className='[--duration:15s]'>
          <motion.div
            animate={{ rotate: -4 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=''
          >
            <Image
              src={Post1}
              alt='post'
              width={338}
              height={444}
              className='border-black border-7 border-solid rounded-[41px] drop-shadow-[8px_6px_0_black] -rotate-[8deg] lg:w-auto w-[70%]'
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 4 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Post2}
              alt='post'
              width={338}
              height={444}
              className='border-black border-[7px] border-solid rounded-[41px] rotate-[8deg] drop-shadow-[8px_6px_0_black] lg:w-auto w-[70%]'
            />
          </motion.div>
          <motion.div
            animate={{ rotate: -4 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Post3}
              alt='post'
              width={338}
              height={444}
              className='border-black border-[7px] border-solid rounded-[41px] -rotate-[8deg] drop-shadow-[8px_6px_0_black] lg:w-auto w-[70%]'
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 4 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Post4}
              alt='post'
              width={338}
              height={444}
              className='border-black border-[7px] border-solid rounded-[41px] rotate-[8deg] drop-shadow-[8px_6px_0_black] lg:w-auto w-[70%]'
            />
          </motion.div>
        </Marquee>
      </div>
    </div>
  );
}
