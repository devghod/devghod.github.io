import * as React from 'react'

export type MyComponent = {
  // Add your component props here
  name: string
}

const MyComponent: React.FC<MyComponent> = props => {
  const { name } = props

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

export default MyComponent
