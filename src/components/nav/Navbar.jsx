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
    <div className={`z-20 fixed w-full ${color ? 'bg-black' : ''} 3xl:pl-16 3xl:pr-24 pt-5 px-10`}>

      <div className='flex justify-between items-center '>

        <Image src={logo} alt='woxro-logo' width={67} height={53} priority={true} />

        <div className='flex gap-[84px] items-center'>
          <ul className='flex items-center lg:text-sm 2xl:text-base 3xl:text-lg  gap-10 lg:gap-12   3xl:gap-[56px] leading-[22px] text-white font-normal font-ibmPlexSans'>
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

    </div>
  )
}

export default Navbar;
