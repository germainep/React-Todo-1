// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
  return (
      <div>
        {props.tasklist.map(task => {
          return (
              <p key={task.id}>{task.task}</p>
          )
        })}
      </div>
  )
}

export default TodoList;
