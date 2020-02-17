import React from 'react'

const Todo = (props) => {
  return (
      <div>
        <span>{props.todo.task}</span>
      </div>
  )
}

export default Todo
