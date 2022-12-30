import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schema'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'sanity__backend',

  projectId: 'j6vs6osg',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemas,
  },
})
