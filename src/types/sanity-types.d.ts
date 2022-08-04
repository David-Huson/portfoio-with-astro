interface Tag {
  label: string;
  value: string;
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  excerpt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
  postTags: [Tag];
  categories: [category: string];
}

export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  projectLink: string;
  skillsUsed: {
    icon: {
      asset: {
        url: string;
      };
    };
    name: string;
  };
  projectTags: [Tag];
}
