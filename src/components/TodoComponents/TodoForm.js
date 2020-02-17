import React, {Component} from 'react'

class TodoForm extends Component {

  render() {
    return (
        <form onSubmit={e => {
          e.preventDefault()
          this.props.handleSumbit(e)

        }}>
          <input type='text' name='todo' value={this.props.todo}
                 onChange={this.props.handleChanges}/>
          <button>Submit</button>
          <button onClick={this.props.clearComplete}>Clear Completed</button>
        </form>
    )
  }
}

export default TodoForm
