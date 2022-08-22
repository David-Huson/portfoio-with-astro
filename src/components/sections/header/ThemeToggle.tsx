/* eslint-disable no-undef */
import React from 'react';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    return document.querySelector('html')!.classList.contains('dark');
  });
  useEffect(() => {
    const html = document.querySelector('html');
    if (darkTheme) {
      html?.classList.add('dark');
    } else {
      html?.classList.remove('dark');
    }
  }, [darkTheme]);
  return (
    <div>
      <input
        type="checkbox"
        name="themeToggle"
        id="checkbox"
        className="hidden"
        defaultChecked
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      />
      <label
        htmlFor="checkbox"
        className="cursor-pointer text-gray-light dark:text-yellow-bright sm:hidden md:flex"
      >
        <Sun className="hidden dark:flex" />
        <Moon className="flex dark:hidden" />
      </label>
    </div>
  );
}
