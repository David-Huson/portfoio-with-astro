import sanityClient from '@sanity/client';

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION,
} = import.meta.env;

const config = {
  projectId: PUBLIC_SANITY_PROJECT_ID || 'j6vs6osg',
  dataset: PUBLIC_SANITY_DATASET || 'production',
  apiVersion: PUBLIC_SANITY_API_VERSION || 'v2021-12-21',
  useCdn: true,
};

export const client = sanityClient(config);
