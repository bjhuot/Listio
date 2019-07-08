import React, {Component} from 'react';
import './App.css';
import Body from './Modules/Body'
import Header from './Modules/Header'
import Nav from "./Modules/Nav";


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
      <div className="container">
        <div className="row">
          <div className="col">
          <Header />
          <Nav />
          </div>
        </div>
        <div className="row">
            <Body todos={this.state.todos} notes={this.state.notes}/>
        </div>        
      </div>
    )
  }
}

export default App;
