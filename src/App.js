import React, {Component} from 'react';
import './App.css';
import Nav from './Modules/Nav'
import TodoItems from './Modules/TodoItems'


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        todos: [],
        notes: []
      }

  }

  componentDidMount() {
    this.fetchApi("https://localhost:5001/api/todo/", "todos")
    this.fetchApi("https://localhost:5001/api/note/", "notes")
  }

  fetchApi = (url, state) => {
    fetch(url)
      .then(res => res.json())
      .then(parsed => this.setState({
        [state]: parsed
      }))
  }

  render() {
    return (
      <div>
      <Nav />
      <TodoItems
      todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
