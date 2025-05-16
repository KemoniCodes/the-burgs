"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Bag from "../../../public/bag.png";
import TextBorderAnimation from "../animata/text/text-border-animation";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='lg:h-[72px] h-[50px] bg-retroBlue flex px-6'>
      <div className='flex lg:hidden mobileMenu justify-between items-center w-full'>
        <div className='logo w-[47%]'>
          <li className=''>
            <Image
              src={Logo}
              height={143.91}
              width={196}
              alt='logo'
              className='relative -top-3'
            />
          </li>
        </div>
        <button
          className='lg:hidden text-bunBeige flex w-full justify-end border-0'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className='lg:hidden bg-retroBlue text-bunBeige flex flex-col gap-8 p-8 z-40 w-screen !h-screen absolute pt-16 -ml-[1.5rem] top-0 items-center'
          >
              <div className='logo w-[70%]'>
          <li className=''>
            <Image
              src={Logo}
              height={143.91}
              width={196}
              alt='logo'
              className='relative -top-3'
            />
          </li>
        </div>
            <ul className='flex-col'>
              <div className='right flex-col items-center gap-12'>
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

                <div className='cart mt-8'>
                  <li className='!mt-0'>
                    <Image
                      src={Bag}
                      alt='bag'
                      width={25}
                      height={31}
                      className='w-[10vw]'
                    />
                  </li>
                </div>
              </div>
            </ul>
          </motion.div>
        )}
      </div>
      <ul className='lg:flex hidden w-full justify-between items-center'>
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
            <li className='!mt-0'>
              <Image src={Bag} alt='bag' width={25} height={31} />
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
