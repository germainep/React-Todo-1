import React, {Component} from 'react'

class TodoForm extends Component {

  render() {
    return (
        <form onSubmit={e => {
          this.props.handleSumbit(e)
          e.preventDefault()
        }}>
          <input type='text' name='todo' value={this.props.todo}
                 onChange={this.props.handleChanges}/>
          <button>Submit</button>
        </form>
    )
  }
}

export default TodoForm
