import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle';
import SocialIcons from './SocialIcons';
import lightLogo from '/lightLogo.png';
import darkLogo from '/darkLogo.png';
import {FiMenu} from 'react-icons/fi/index'

function Navigation() {
  const [open, setOpen] = useState(false);
  const nav = [
    { link: '/', name: 'Home' },
    { link: '/blog', name: 'Blog' },
    { link: '/projects', name: 'Projects' },
    { link: '/about', name: 'About me' },
  ];
  return (
    <header className='bg-gradient-to-b from-light-bg dark:from-dark to-transparent py-2'>
      <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
        <div className='flex-col justify-start'>
          <img className="dark:flex hidden" src={lightLogo} width={220} height={55}loading="lazy" />
          <img className="dark:hidden flex" src={darkLogo} width={220} height={55} loading="lazy" />
          <h6 className="text-light-txt/75 font-subheading">SOFTWARE ENGINEER</h6>
        </div>
        <div className='lg:hidden flex space-x-4'>
          <FiMenu className='h-6 w-6 cursor-pointer' onClick={() => {setOpen(!open)}}/>
          <ThemeToggle/>
        </div>
        <nav className={` ${open ? 'lg:block': 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
          <ul className='text-base font-heading text-gray-light text-center align-items-center lg:flex lg:justify-between'>
            {nav.map((item) => (
              <li key={item.name} className='lg:px-5 py-2 block font-semibold'>
                <a href={item.link} target={'_self'}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <SocialIcons className='lg:hidden justify-center my-2'/>
        </nav>
        <div className=' hidden lg:flex space-x-6'>
          <SocialIcons />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navigation