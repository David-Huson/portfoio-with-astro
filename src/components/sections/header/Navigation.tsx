import lightLogo from '/lightLogo.png';
import darkLogo from '/darkLogo.png';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import React from 'react';

function Navigation({ children }: any) {
  return (
    <>
      <div className="items-center rounded border-gray-200 bg-gradient-to-b from-light-bg to-transparent px-2 py-2.5 dark:from-dark-primary sm:px-4">
        <div className="container mx-auto flex min-w-fit items-center">
          <a
            href="https://davidhuson.dev"
            className="items-left flex h-auto flex-col"
          >
            <img
              className="mr-3 hidden h-6 min-w-fit dark:flex"
              src={lightLogo}
              loading="lazy"
            />
            <img
              className="my-2 flex h-6 min-w-fit dark:hidden"
              src={darkLogo}
              loading="lazy"
            />
            <h6 className="pt-1 font-subheading text-base text-dark-primary dark:text-light-txt/75">
              SOFTWARE ENGINEER
            </h6>
          </a>
          <div className="hidden grow md:flex">
            <Menu />
          </div>
          {children}
        </div>
        <MobileMenu />
      </div>
    </>
  );
}

export default Navigation;
