import React from 'react'

const Todo = (props) => {
  return (
      <div>
        <span onClick={() => props.toggleComplete(props.todo.id)}>{props.todo.task}</span>
      </div>
  )
}

export default Todo
