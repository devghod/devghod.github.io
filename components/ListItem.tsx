import React from 'react'
import Link from 'next/link'

import { UserType } from '../types/User.type'

type Props = {
  data: UserType
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.first_name}
  </Link>
)

export default ListItem
