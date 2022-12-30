import { defineField, defineType } from "sanity";

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'skillsUsed',
      title: 'Skills Used',
      type: 'reference',
      to: [{type: 'skill'}]
    }),
    defineField({
      name: 'blogPost',
      title: 'Accompanying Blog Post',
      type: 'reference',
      to: [{type: 'post'}]
    })
  ],
})