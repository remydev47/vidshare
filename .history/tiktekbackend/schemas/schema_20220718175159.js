// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import post from './post'
import comment from './comment'
import postedBy from './postedBy'
import user from './user'


export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
   post,
   comment,
   postedBy,
   user
  ]),
})
