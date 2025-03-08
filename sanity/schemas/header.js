import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [{
        type: 'object',
        icon: LinkIcon,
        fields: [
          {
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https'],
              allowRelative: true,
            })
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'file',
            description: 'Must be an SVG, using currentColor, no width or height.'
          },
          {
            name: 'hideMobile',
            title: 'Hide Mobile',
            type: 'boolean',
          },
          {
            name: 'newTab',
            title: 'New Tab',
            type: 'boolean',
          },
        ]
    }]
    }),
  ],
})