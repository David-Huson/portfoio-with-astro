
// We import object and document schemas

import {post} from './post'
import { author } from './author'
import { blockContent } from './blockContent'
import { category } from './category'
import { project } from './project'
import { skill } from './skill'

// Then we give our schema to the builder and provide the result to Sanity
export default[
    post,
    project,
    author,
    category,
    skill,
    blockContent,
]
