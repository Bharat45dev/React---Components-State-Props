import React from 'react'

const items = [
  { id: 1, name: 'Bharat' },
  { id: 2, name: 'Vishal' },
  { id: 3, name: 'Raj' },
  { id: 4, name: 'Ram' },
];
const ListView = () => {
  return (
   <ul>
    {items.map((item)=>(
      <li key={item.id} >{item.name}</li>
    ))}
   </ul>
  )
}

export default ListView