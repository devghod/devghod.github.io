import * as React from 'react'

import { UserType } from '../types/User.type'

type ListDetailProps = {
  item: UserType
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.first_name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
