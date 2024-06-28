'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import logo from '/src/assets/icons/navbar/w-logo.png'
import userIcon from '/src/assets/icons/navbar/User.png'
import searchIcon from '/src/assets/icons/navbar/Search.png'
import { NAV_LINKS } from '@/const'

const Navbar = () => {

  const [color, setColor] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    }

    // Add event listener when component mounts
    window.addEventListener('scroll', scrollHandler);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className={`z-20 fixed w-full ${color ? 'bg-black' : ''} pl-[72px] pr-[94px] pt-[30px]`}>
      <div className='flex justify-end items-center '>
        <div className='flex gap-[84px] items-center'>
          <ul className='flex items-center text-[16px] gap-[56px] leading-[22px] text-white font-normal'>
            {NAV_LINKS.map((nav) => (
              <li key={nav.title}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-[35px] items-center'>
            <Image src={searchIcon} alt='woxro-logo' width={24} height={24} />
            <Image src={userIcon} alt='woxro-logo' width={24} height={24} />
          </div>
        </div>
      </div>
      <Image src={logo} alt='woxro-logo' width={67} height={53} priority={true} />
    </div>
  )
}

export default Navbar;
