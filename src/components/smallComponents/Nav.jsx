import { hamburger } from '../../assets/icons/index.js';
import { headerLogo } from '../../assets/images/index.js';
import { navLinks } from '../../constants/index.js';
import React from 'react';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((navLink) => (
            <li>
              <a
                href={navLink.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
