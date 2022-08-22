export const site = {
  title: `David Huson's Portfolio`,
  description: `A Portfolio and blog where I can share my projects and ideas with the world.`,
  url: `https://davidhuson.dev`, // No trailing slash!
  // JSON LD
  name: `David Huson`,
  // Twitter URL
  twitter: {
    name: `Twitter`,
    link: `https://twitter.com/David_Huson_`,
  },

  github: {
    name: `Github`,
    link: `https://github.com/David-Huson/`,
  },

  facebook: {
    name: `Facebook`,
    link: `https://facebook.com`,
  },

  linkedIn: {
    name: `LinkedIn`,
    link: `https://www.linkedin.com/in/david-huson-`,
  },

  instagram: {
    name: `Instagram`,
    link: `https://instagram.com`,
  },
};

export const nav = [
  { link: '/blog', name: 'Blog' },
  { link: '/projects', name: 'Projects' },
  { link: '/about', name: 'About me' },
];

export interface ArticleSchemaTypes {
  title: string;
  permalink: URL;
  publishDate: Date;
  ogImageUrl: URL;
  description: string;
}
