import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { sanityStructure } from './sanity/sanityStructure'
import { schemaTypes } from './sanity/index'

export default defineConfig({
  name: 'dog-ear',
  title: 'Dog Ear',
  projectId: 'hz62cv9y',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: sanityStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})