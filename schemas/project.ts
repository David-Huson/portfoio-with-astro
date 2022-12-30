export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'url',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'projectTags',
        title: 'Tags',
        type:'tags',
        options: {
          includeFromRelated: 'projectTags'
        }
      },
      {
        name: 'skillsUsed',
        title: 'Skills Used',
        type: 'reference',
        to: [{type: 'skill'}]
      },
      {
        name: 'blogPost',
        title: 'Accompanying Blog Post',
        type: 'reference',
        to: [{type: 'post'}]
      }
    ],
  };