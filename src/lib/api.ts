export const AllProjects = `*[_type == "project"] {
  _id,
  title,
  description,
  projectLink,
  projectTags,
  mainImage {
  asset
  }
}`;

export const AllPosts = `*[_type == 'post']{
  _id,
  _createdAt,
  publishedAt,
  title,
  excerpt,
  author,
  mainImage {
    asset
  },
  slug {
    current
  },
  body,
  postTags,
  "categories": categories[]->title
}`;

export const AllPostsSlugs = `*[_type == 'post'] {
  slug {
    current
  },
}`;