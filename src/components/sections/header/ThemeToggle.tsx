import React from 'react';
import { LightMode } from '@styled-icons/material/LightMode';
import { DarkMode } from '@styled-icons/material/DarkMode';

function ThemeToggle() {
  return (
    <div>
      <input
        type="checkbox"
        name="themeToggle"
        id="checkbox"
        className="hidden"
        defaultChecked
      />
      <label htmlFor="checkbox" className="hidden text-yellow-500 dark:block">
        <LightMode />
      </label>
      <label htmlFor="checkbox" className="block text-gray-500 dark:hidden">
        <DarkMode />
      </label>
    </div>
  );
}

export default ThemeToggle;
