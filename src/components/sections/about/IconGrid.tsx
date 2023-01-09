import React from 'react'
import {SiVisualstudiocode, SiEclipseide, SiToggl, SiTrello, SiJirasoftware, SiGithub} from 'react-icons/si/index.js'

export const IconGrid= () => {
  return (
    <div className='flex space-x-4 flex-wrap'>
      {/* VSCode */}
      <div className='flex space-x-1'>
        <SiVisualstudiocode title='Visual Studio Code' size='1em' color='#0078d7'/>
        <span className='text-body font-thin text-base'>Visual Studio Code</span>
      </div>
      {/* Github */}
      <div className='flex space-x-1'>
        <SiGithub title='Github' size='1em' className='text-light-txt'/>
        <span className='text-body font-thin text-base'>Github</span>
      </div>
      {/* Eclipse */}
      <div className='flex space-x-1'>
        <SiEclipseide title='Eclipse' size='1em' className='text-light-txt'/>
        <span className='text-body font-thin text-base'>Eclipse</span>
      </div>
      {/* Toggltrack */}
      <div className='flex space-x-1'>
        <SiToggl title='Toggl Track' size='1em' color='rgb(229,124,216)'/>
        <span className='text-body font-thin text-base'>Toggltrack</span>
      </div>
      {/* Jira */}
      <div className='flex space-x-1'>
        <SiJirasoftware title='Microsoft Excel' size='1em' color='rgb(1, 82, 204)'/>
        <span className='text-body font-thin text-base'>Jira Software</span>
      </div>
      {/* Trello */}
      <div className='flex space-x-1'>
        <SiTrello title='Trello' size='1em' color='rgb(1,121,191)'/>
        <span className='text-body font-thin text-base'>Trello</span>
      </div>
    </div>
  )
}


