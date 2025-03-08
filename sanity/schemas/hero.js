import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'imageForeground',
      title: 'Image: Foreground',
      type: 'image',
    }),
    defineField({
      name: 'imageBackground',
      title: 'Image: Background',
      type: 'image',
    }),
    defineField({
      name: 'imageForegroundMobile',
      title: 'Image: Foreground: Mobile',
      type: 'image',
    }),
    defineField({
      name: 'imageBackgroundMobile',
      title: 'Image: Background: Mobile',
      type: 'image',
    }),
  ],
})