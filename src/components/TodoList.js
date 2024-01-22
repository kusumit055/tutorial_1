import React from 'react'

export default function TodoList(props) {
  return (
    <div className='todo-item'>
      <input type='checkbox'  checked = {props.item.completed} 
      onChange={() => props.handonclick(props.item.id) } />
      <p>{props.item.text}</p>
    </div>
  )
}
