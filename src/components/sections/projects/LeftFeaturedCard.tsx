/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import type { Project } from '../../../types/sanity-types.d';
import { getSanityImageUrl } from '../../../utils/helpers';

function LeftFeaturedCard(props: Props) {
  return (
    <div className="inline-flex w-full justify-center align-middle">
      <img
        src={getSanityImageUrl(props.project.mainImage).url()}
        width="45%"
        className="not-type relative z-0 rounded-sm py-6 opacity-80"
      />
      <div className="type -ml-24 mt-3 flex flex-col dark:type-invert">
        <div className="relative z-50">
          <h3 className="mb-0 text-right leading-none">
            {props.project.title}
          </h3>
        </div>
        <div className="relative z-0 h-48 w-full rounded-md border border-light-bg/30 bg-gradient-to-br from-light-bg/80 to-transparent p-4 backdrop-blur-lg dark:from-dark/80">
          <h6 className="m-1 text-right font-normal text-green">
            Featured project
          </h6>
          <p>
            {props.project.description}
            {/* remove in prod */}
            {props.project.description}
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-end space-x-5">
          {props.project.projectTags.map((tag) => (
            <span
              key={props.project._id + tag.value}
              className="relative z-50 mb-2 font-normal text-orange"
            >
              {tag.label}
            </span>
          ))}
          {/* remove in prod */}
          {props.project.projectTags.map((tag) => (
            <span
              key={props.project._id + tag.value}
              className="relative z-50 mb-2 font-normal text-orange"
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="type type-invert rounded-md bg-blue-dark px-3 py-2 font-normal dark:bg-lavender dark:text-dark">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

interface Props {
  project: Project;
}

export default LeftFeaturedCard;
