// import { gql } from 'apollo-server-micro'

// export const typeDefs = gql`
//     type Link {
//         id: String
//         title: String
//         description: String
//         url: String
//         category: String
//         imageUrl: String
//         users: [String]
//     }

//     type Query {
//         links: [Link]!
//     }
// `;

import { makeSchema } from "nexus";
import { join } from "path";
import * as types from './types'
export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(
            process.cwd(),
            'node_modules',
            '@type',
            'nexus-typegen',
            'index.d.ts'
        ),
        schema: join(process.cwd(), 'graphql', 'schema.graphql'),
    },
    contextType: {
        export: 'Conext',
        module: join(process.cwd(), 'graphql', 'context.ts'),
    }
})