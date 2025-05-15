import React from "react";
import Image from "next/image";
import Submark from "../../../public/beigeSubmark.svg";

export default function Footer() {
  return (
    <footer className='bg-retroBlue px-20 pt-11 py-5'>
      <ul className='flex justify-between items-center mb-[74px]'>
        <ul className='text-bunBeige'>
          <li className='h3 mb-5'>contact</li>
          <li>+1 310 222 7777</li>
          <li>CONTACT@THEBURGS.COM</li>
        </ul>
        <li>
          <Image src={Submark} alt='submark' />
        </li>
        <ul className='text-bunBeige text-right'>
          <li className='h3 mb-5'>address</li>
          <li>777 SUNSET BLVD</li>
          <li>LOS ANGELES, CA 90071</li>
        </ul>
      </ul>
      <h4 className='text-center text-bunBeige'>
        © THE ‘BURGS 2024 | ALL RIGHTS RESERVED
      </h4>
    </footer>
  );
}
