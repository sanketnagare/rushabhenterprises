import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import Button from '../elements/button';

const Header = () => {
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(false);
  const path = location.pathname;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <header className="header">


      <div className="flex justify-between px-4 lg:px-0">

        <Button
          className=""
          type="link"
          href="/"
        >
          <p className="text-theme-blue text-4xl">
            Rushabh
            <span className="text-theme-purple">Enterprises</span>
          </p>
        </Button>

        <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className={`hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0`}>
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
            type="link"
            href=""
          >
            HOME
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/team' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/team"
          >
            ABOUT US
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/project' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            PRODUCTS
          </Button>
        </li>
        <li>
            <Button
              className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
              type="link"
              href="/contact-us"
            >
              CONTACT US
            </Button>
          </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/"
            >
              HOME
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/team' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/team"
            >
              ABOUT US
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              PRODUCTS
            </Button>
          </li>
          <li>
            <Button
              className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
              type="link"
              href="/contact-us"
            >
              CONTACT US
            </Button>
          </li>
        </ul>
      </Transition>
    </header>
  );
};

export default Header;