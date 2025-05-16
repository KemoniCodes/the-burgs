"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Hero from "./components/home/hero";
import GreenBadge from "../public/greenBadge.svg";
import PinkLogo from "../public/pinkSecondary.svg";
import Cater from "./components/home/cater";
import WordMarquee from "./components/home/marquee";
import Press from "./components/home/press";
import BurgerBanner from "../public/burgerBanner.svg";
import Hello from "./components/home/hello";

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <div className='section2 border-y-black border-y-[7px] border-y-solid py-[175px] lg:px-[152px] px-[50px]'>
        <motion.div
          className='absolute right-0 top-[100vh]'
          animate={{ rotate: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image src={GreenBadge} width={250} height={250} alt='green badge' />
        </motion.div>

        <h1 className='text-center text-retroBlue'>
          Your friendly neighborhood burger joint. 100% grass-fed beef brought
          to you by your pals at The ‘Burgs.
        </h1>
        <motion.div
          className='absolute left-20 mt-20'
          animate={{ rotate: -10 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={PinkLogo}
            width={276}
            height={177}
            alt='pink logo'
            className=''
          />
        </motion.div>
      </div>
      <Cater />
      <WordMarquee />
      <Press />
      <div className='blueBurgerBanner absolute -z-10'>
        <Image src={BurgerBanner} alt='word banner' />
      </div>
      <Hello />
      <div className='blueBurgerBanner'>
        <Image src={BurgerBanner} alt='word banner' />
      </div>
    </div>
  );
}
