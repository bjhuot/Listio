import { Component } from 'react'

class TodoApiCall extends Component {
  componentDidMount() {
    this.props.getApi('https://localhost:5001/api/todo/', 'todos')
  }
  render() {
    return null
  }
}

export default TodoApiCall
