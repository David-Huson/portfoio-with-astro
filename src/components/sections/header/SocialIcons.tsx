import React, { Component } from 'react'
import { site } from '../../../data/site';
import { GitHub, Linkedin, Twitter } from 'react-feather';

type Props = {
  className?: string
}

export class SocialIcons extends Component<Props,{}> {

  render() {
    return (
      <div className={`${this.props.className + ' flex flex-row items-center space-x-4'}`}>
        <a href={site.github.link} className="text-dark dark:text-light-txt">
          <GitHub />
        </a>
        <a href={site.twitter.link} className="text-dark dark:text-light-txt">
          <Twitter />
        </a>
        <a href={site.linkedIn.link} className="text-dark dark:text-light-txt">
          <Linkedin />
        </a>
      </div>
    )
  }
}

export default SocialIcons