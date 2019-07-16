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
        notes: [],
        nameInput: "Enter a new to-do item...",
        detailInput: "",
        tagsInput: [],
        dateDueInput: "",
        timeDueInput: "",
        bodyInput: ""
      }

  }

  componentDidMount() {
    this.getApi("https://localhost:5001/api/todo/", "todos")
    this.getApi("https://localhost:5001/api/note/", "notes")
  }

  getApi = (url, state) => {
    fetch(url)
      .then(res => res.json())
      .then(parsed => this.setState({
        [state]: parsed
      }))
  }

  deleteApi = (url, id, category) => {
    fetch(url + id, {
      method: 'delete'
    })
      .then(response => {
        if(response.status === 204) {
          this.getApi(url, category)
          }
        }
      )
  }

  addApi = (url, data, category) => {
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
      .then(response => {
        if(response.status === 201) {
          this.getApi(url, category)
        }
      })
      .catch(err => console.error(err))
  }

  nameChange = (e) => {
    this.setState({nameInput:e.target.value})
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
        <Body todos={this.state.todos} notes={this.state.notes}
        deleteapi={this.deleteApi} addapi={this.addApi}
        nc={this.nameChange} name={this.state.nameInput} />
      </div>
    )
  }
}

export default App;
