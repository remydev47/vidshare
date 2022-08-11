import type { NextApiRequest, NextApiResponse } from 'next'

import { allPostsQuery } from '../../../utils/queries'

export default function handler(req: NextApiRequest,
 res: NextApiResponse) {
   res.status(200).json({ name: 'Response Success' })
}
