import * as React from 'react'
import ListItem from './ListItem'
import { UserType } from '../types/User.type'

type Props = {
  items: UserType[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
