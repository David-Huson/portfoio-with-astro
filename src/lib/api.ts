export const AllProjects = `*[_type == "project"] {
  _id,
  title,
  description,
  projectLink,
  tags,
  mainImage {
  asset
  }
}`;

export const AllPosts = `*[_type == 'post'][0...3] {...}`;
