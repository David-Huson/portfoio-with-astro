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

export const AllPosts = `*[_type == 'post'][0...6] {
  _id,
  _createdAt,
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
