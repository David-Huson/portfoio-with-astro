import React from 'react';
import { nav } from '~/data/site';

// export interface Props {
//   currentPage: string;
// }

function Menu() {
  return (
    <>
      <nav
        aria-label="navigation-menu"
        className="hidden h-full w-full pt-0 md:flex"
      >
        <div className="flex w-auto">
          <ul className="ml-4 mt-4 flex space-x-8 font-heading text-base sm:flex-col md:flex-row md:border-0">
            {nav.map((item) => (
              <li key={item.name}>
                <a href={item.link} target={'_self'}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
