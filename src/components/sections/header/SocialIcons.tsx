import { site } from '../../../data/site';
import { GitHub, Linkedin, Twitter } from 'react-feather';
import React from 'react';

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href={site.github.link}
        target={'_blank'}
        className="text-dark-primary dark:text-light-txt"
      >
        <GitHub />
      </a>
      <a
        href={site.twitter.link}
        target={'_blank'}
        className="text-dark-primary dark:text-light-txt"
      >
        <Twitter />
      </a>
      <a
        href={site.linkedIn.link}
        target={'_blank'}
        className="text-dark-primary dark:text-light-txt"
      >
        <Linkedin />
      </a>
    </div>
  );
}
