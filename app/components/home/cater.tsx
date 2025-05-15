import React from "react";
import Image from "next/image";
import Patties from "../../../public/bp.png";

export default function Cater() {
  return (
    <div className='cater bg-redRobin border-b-black border-b-[7px] border-b-solid '>
      <div className='row py-[60px] px-6 flex items-center'>
        <div className='left w-1/2 pl-6 pr-12'>
          <h1 className='text-bunBeige'>WE CATER FROM 12PM - 6PM</h1>
          <p className='text-bunBeige mt-4'>
            Get catering for all of your events. From block parties,
            <br /> BBQ’s, birthdays and more! We’ll bring the
            <br /> friendliness and the flavor straight to you!
          </p>

          <button className='h2 text-center text-redRobin bg-bunBeige uppercase rounded-[15px] w-[80%] border-[5px] border-solid border-black drop-shadow-[14px_10px_0_black] mt-32 transition-all duration-300 active:translate-x-[2px] active:translate-y-[2px] active:drop-shadow-none'>
            cater now
          </button>
        </div>
        <div className='right w-1/2 justify-items-center'>
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
