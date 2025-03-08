import {defineField, defineType} from 'sanity'

export const media = defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
    }),
    defineField({
      name: 'media',
      type: 'array',
      of: [
        {
          name: 'mediaImage',
          title: 'Image',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            }
          ]
        },
        {
          name: 'mediaVideo',
          title: 'Video',
          type: 'object',
          fields: [
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              validation: Rule => Rule.required()
            },
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            }
          ]
        }
      ]
    }),
  ],
})