import React, { Component } from "react"
import "./App.css"
import Body from "./Modules/Body"
import Header from "./Modules/Header"
import Nav from "./Modules/Nav"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      notes: [],
      nameInput: "",
      detailInput: "",
      tags: [],
      tagsInput: "",
      dateDueInput: "",
      month: "",
      day: "",
      year: "",
      timeDueInput: "",
      hour: "",
      minute: "",
      ampm: "",
      bodyInput: "",
    }
  }

  removeTag = e => {
    const newTags = this.state.tags.filter(tag => tag !== e.target.innerHTML)
    this.setState({ tags: newTags })
  }

  addTag = e => {
    if (e.key === "Enter") {
      this.setState(prevState => ({
        tags: [...prevState.tags, this.state.tagsInput],
      }))
      this.setState({ tagsInput: "" })
    }
  }

  componentDidMount() {
    this.getApi("https://localhost:5001/api/todo/", "todos")
    this.getApi("https://localhost:5001/api/note/", "notes")
  }

  getApi = (url, state) => {
    fetch(url)
      .then(res => res.json())
      .then(parsed =>
        this.setState({
          [state]: parsed,
        })
      )
  }

  deleteApi = (url, id, category) => {
    fetch(url + id, {
      method: "delete",
    }).then(response => {
      if (response.status === 204) {
        this.getApi(url, category)
      }
    })
  }

  resetState = () => {
    this.setState({
      nameInput: "",
      detailInput: "",
      tags: [],
      tagsInput: "",
      dateDueInput: "",
      timeDueInput: "",
      bodyInput: "",
    })
  }

  setDateTime = () => {
    const interim = [this.state.month, this.state.day, this.state.year]
    this.setState({ dateDueInput: interim.join("/") })
    const interim2 = [this.state.hour, this.state.minute, ` ${this.state.ampm}`]
    this.setState({ timeDueInput: interim2.join("") })
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  addApi = (url, data, category) => {
    this.setDateTime() //TODO: see why date/time is not being included in data

    this.sleep(1000).then(() => {
      fetch(url, {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json",
        }),
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.status === 201) {
            this.getApi(url, category)
          }
        })
        .catch(err => console.error(err))

      this.sleep(1000).then(() => {
        this.resetState()
      })
    })
  }

  updateApi = (url, id, data, category) => {
    fetch(url + id, {
      method: "put",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status === 204) {
          this.getApi(url, category)
        }
      })
      .catch(err => console.error(err))

    this.resetState()
  }

  //Input field state changes

  nameChange = e => {
    this.setState({ nameInput: e.target.value })
  }

  detailChange = e => {
    this.setState({ detailInput: e.target.value })
  }

  tagsChange = e => {
    this.setState({ tagsInput: e.target.value })
  }

  bodyChange = e => {
    this.setState({ bodyInput: e.target.value })
  }

  setDateTimeDue = e => {
    this.setState({ [e.target.id]: e.target.value })
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
        <Body
          updateApi={this.updateApi}
          setDateTime={this.setDateTime}
          setDateTimeDue={this.setDateTimeDue}
          todos={this.state.todos}
          notes={this.state.notes}
          deleteapi={this.deleteApi}
          addapi={this.addApi}
          nc={this.nameChange}
          nameInput={this.state.nameInput}
          dc={this.detailChange}
          detailInput={this.state.detailInput}
          tc={this.tagsChange}
          tagsInput={this.state.tagsInput}
          tags={this.state.tags}
          addtag={this.addTag}
          removeTag={this.removeTag}
          bc={this.bodyChange}
          bodyInput={this.state.bodyInput}
          ddc={this.dateDueChange}
          dateDueInput={this.state.dateDueInput}
          tdc={this.timeDueChange}
          timeDueInput={this.state.timeDueInput}
        />
      </div>
    )
  }
}

export default App