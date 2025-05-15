import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Bag from "../../../public/bag.png";
import TextBorderAnimation from "../animata/text/text-border-animation";

export default function Nav() {
  return (
    <nav className='h-[72px] bg-retroBlue flex px-6'>
      <ul className='flex w-full justify-between items-center'>
        <div className='logo'>
          <li>
            <Image
              src={Logo}
              height={143.91}
              width={196}
              alt='logo'
              className='relative -top-3.5'
            />
          </li>
        </div>
        <div className='right flex items-center gap-12'>
          <li>
            <TextBorderAnimation text='home' />
          </li>
          <li>
            <TextBorderAnimation text='menu' />
          </li>
          <li>
            <TextBorderAnimation text='merch' />
          </li>
          <li>
            <TextBorderAnimation text='about' />
          </li>
          <li>
            <TextBorderAnimation text='press' />
          </li>

          <div className='cart ml-14'>
            <li className="!mt-0">
              <Image src={Bag} alt='bag' width={25} height={31} />
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
