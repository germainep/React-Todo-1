import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const list = [{task: 'write code', id: 1, completed: false}]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      list,
      todo: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addTask(e, this.state.todo)
    this.setState({todo: ''})

  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTask = (e, todo) => {
    e.preventDefualt()
    const newTask = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    console.log(newTask)
    this.setState({list: [...this.state.list, newTask]})
  }

  render() {
    return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm todo={this.state.todo} handleSumbit={this.handleSubmit}
                    handleChange={this.handleChange}/>
          <TodoList tasklist={this.state.list}/>
        </div>
    )
  }
}

export default App;
