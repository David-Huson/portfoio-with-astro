import type { FunctionComponent } from 'react';
import React from 'react';

const ResumeButton: FunctionComponent = () => {
  return (
    <button
      type="button"
      className="mr-3 min-w-max rounded-lg bg-yellow-dull px-5 py-2.5 text-center focus:ring-2 focus:ring-slate-500 dark:bg-lavender md:mr-0"
    >
      My Resume
    </button>
  );
};

export default ResumeButton;
