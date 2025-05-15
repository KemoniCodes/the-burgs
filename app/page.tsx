import Image from "next/image";
import Hero from "./components/home/hero";
import GreenBadge from "../public/greenBadge.png";
import PinkLogo from "../public/pinkSecondary.png";
import Cater from "./components/home/cater";
import WordMarquee from "./components/home/marquee";

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <div className='section2 border-y-black border-y-[7px] border-y-solid py-[175px] px-[152px]'>
        <Image
          src={GreenBadge}
          width={250}
          height={250}
          alt='green badge'
          className='absolute right-0 top-[100vh]'
        />
        <h1 className='text-center text-retroBlue'>
          Your friendly neighborhood burger joint. 100% grass-fed beef brought
          to you by your pals at The ‘Burgs.
        </h1>
        <Image
          src={PinkLogo}
          width={276}
          height={177}
          alt='pink logo'
          className='absolute left-20 mt-20'
        />
      </div>
      <Cater />
      <WordMarquee />
    </div>
  );
}
