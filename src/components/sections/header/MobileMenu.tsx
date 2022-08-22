import React from 'react';
import { nav } from '~/data/site';

const MobileMenu = () => {
  return (
    <nav
      aria-label="mobile-navigation-menu"
      id="mobile-navigation-menu"
      className="h-full w-full sm:flex md:hidden"
    >
      <ul className="w-full flex-col space-y-4 py-2 text-center font-heading text-base">
        {nav.map((item) => (
          <li key={item.name}>
            <a href={item.link} target={'_self'}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
