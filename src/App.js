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

  handleSubmit = (e) => {
    this.addTask(e)
    this.setState({todo: ''})
    // this.addToLocalStorage()
  }


  handleChanges = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTask = (e) => {
    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }
    this.setState({list: [...this.state.list, newTask]})

  }

  toggleComplete = (taskid) => {
    this.setState({
                    list: this.state.list.map(task => {
                      if (taskid === task.id) {
                        return {
                          ...task,
                          completed: !task.completed
                        }
                      }
                      return task
                    })
                  })
  }

  clearCompleted = () => {
    console.log(this.state.list)
    this.setState({list: this.state.list.filter(task => task.completed === false)})
  }

  render() {
    return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm todo={this.state.todo} handleSumbit={this.handleSubmit}
                    handleChanges={this.handleChanges} clearComplete={this.clearCompleted}/>
          <TodoList tasklist={this.state.list} toggleComplete={this.toggleComplete}/>
        </div>
    )
  }
}

export default App;
