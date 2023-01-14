import React from 'react'
import type { Project } from '../../../types/sanity-types';
import SeeMoreLink from '../../elements/SeeMoreLink';
type Props = {
  project: Project;
}
function ProjectCard<Component>(props: Props) {
  const project = props.project;
  return (
      <article
        className="pl-2 w-full max-w-full lg:w-96 lg:h-48 flex flex-col bg-gradient-to-br from-light-bg/80 dark:from-dark/80 to-light-bg/10 dark:to-dark/10 backdrop-blur-xl border-b-[1px] lg:border border-light-bg/30 lg:rounded transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-100 hover:bg-slate-100/90 dark:hover:bg-dark/80"
      >
        <h3 className="text-md lg:text-lg my-3">{project.title}</h3>
        <p className="pl-2 h-full">
          {project.description}
        </p>
        <div className="pl-2 w-fit h-full">
          <div className="flex flex-wrap space-x-4 justify-start">
            {project.projectTags &&
              project.projectTags.map((tag) => (
                <span key={project._id} className="font-normal mb-2 text-orange">{tag.label}</span>
              ))}
          </div>
        </div>
        <a
          href={project.projectLink}
          target="_self"
          className="w-full h-full absolute lg:relative lg:p-2"
        >
          <SeeMoreLink />
        </a>
      </article>
  )
}

export default ProjectCard