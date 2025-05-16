import React from "react";
import Image from "next/image";
import Patties from "../../../public/bp.png";

export default function Cater() {
  return (
    <div className='cater bg-redRobin border-b-black border-b-[7px] border-b-solid '>
      <div className='row lg:py-[60px] py-[100px] px-6 flex lg:flex-row flex-col-reverse items-center'>
        <div className='left lg:w-1/2 w-full lg:pl-6 lg:pr-12 pr-4 pl-4 lg:text-left text-center lg:mt-0 mt-16'>
          <h1 className='text-bunBeige'>WE CATER FROM 12PM - 6PM</h1>
          <p className='text-bunBeige mt-4'>
            Get catering for all of your events. From block parties, BBQ’s,
            birthdays and more! We’ll bring the friendliness and the flavor
            straight to you!
          </p>
          <button className='h2 text-center text-redRobin bg-bunBeige uppercase rounded-[15px] lg:w-[80%] w-full border-[5px] border-solid border-black drop-shadow-[14px_10px_0_black] lg:mt-32 mt-16 transition-all duration-300 active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-none cursor-pointer'>
            cater now
          </button>
        </div>
        <div className='right w-full lg:w-1/2 justify-items-center'>
          <Image
            src={Patties}
            alt='patties'
            width={681}
            height={894}
            className='w-[80%] border-[5px] border-solid border-black rounded-[40px] drop-shadow-[18px_14px_0_black]'
          />
        </div>
      </div>
    </div>
  );
}
