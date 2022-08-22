import React from 'react';
import { useEffect, useState } from 'react';

export default function MobileMenuToggle() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const menu = document.getElementById('mobile-navigation-menu');

    if (showMenu) {
      menu?.classList.remove('hidden');
      menu?.classList.add('flex');
    } else {
      menu?.classList.add('hidden');
    }
  }, [showMenu]);

  return (
    <button
      id="menu-toggle"
      className="border-transparent focus:border-light-txt sm:flex md:hidden"
      type="button"
      aria-pressed={showMenu ? 'true' : 'false'}
      onClick={() => setShowMenu(!showMenu)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="sr-only">Toggle sidebar</span>
    </button>
  );
}
