import { defineField, defineType } from "sanity"

export const skill = defineType({
  name:'skill',
  title:'Skills',
  type: 'document',
  fields:[
      defineField({
          name:'name',
          title:'Name',
          type:'string'
      }),
      defineField({
          name:'bgColor',
          title:'BgColor',
          type:'string'
      }),
      defineField({
          name:'icon',
          title:'Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
      }),
      
  ]
})