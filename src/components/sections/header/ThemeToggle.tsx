import React from 'react';
import { Sun, Moon } from 'react-feather';

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
        <Sun />
      </label>
      <label htmlFor="checkbox" className="block text-lavender dark:hidden">
        <Moon />
      </label>
    </div>
  );
}

export default ThemeToggle;
