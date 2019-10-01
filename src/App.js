import React, { Component } from 'react'
import './App.css'
import Body from './Modules/Body'
import Nav from './Modules/Nav'

class App extends Component {
  /////////////////////////////////
  // STATE AND RELATED FUNCTIONS //
  /////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      notes: [],
      nameInput: '',
      detailInput: '',
      tags: [],
      tagsInput: '',
      dateDueInput: '',
      month: '',
      day: '',
      year: '',
      timeDueInput: '',
      hour: '',
      minute: '',
      ampm: '',
      bodyInput: '',
      disabled: 'disabled',
      target: '',
    }
  }

  resetState = () => {
    // Resets state values after submission of a todo or note item
    this.setState({
      nameInput: '',
      detailInput: '',
      tags: [],
      tagsInput: '',
      dateDueInput: '',
      timeDueInput: '',
      bodyInput: '',
    })
  }

  setDateTime = () => {
    // Joins date and time values (set from drop down menus) into valid submission format
    const interim = [this.state.month, this.state.day, this.state.year]
    this.setState({ dateDueInput: interim.join('/') })
    const interim2 = [this.state.hour, this.state.minute, ` ${this.state.ampm}`]
    this.setState({ timeDueInput: interim2.join('') })
  }

  // Removes/Adds tag from array when creating or editing todo/note items

  removeTag = (e) => {
    const newTags = this.state.tags.filter((tag) => tag !== e.target.innerHTML)
    this.setState({ tags: newTags })
  }

  addTag = (e) => {
    if (e.key === 'Enter') {
      this.setState((prevState) => ({
        tags: [...prevState.tags, this.state.tagsInput],
      }))
      this.setState({ tagsInput: '' })
    }
  }

  /////////////////////////
  // MANAGED INPUT FIELD //
  /////////////////////////

  nameChange = (e) => {
    this.setState({ nameInput: e.target.value })
  }

  detailChange = (e) => {
    this.setState({ detailInput: e.target.value })
  }

  tagsChange = (e) => {
    this.setState({ tagsInput: e.target.value })
  }

  bodyChange = (e) => {
    this.setState({ bodyInput: e.target.value })
  }

  setDateTimeDue = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  ///////////////////////////
  // API RELATED FUNCTIONS //
  ///////////////////////////

  getApi = (url, state) => {
    fetch(url)
      .then((res) => res.json())
      .then((parsed) =>
        this.setState({
          [state]: parsed,
        })
      )
  }

  deleteApi = (url, id, category) => {
    fetch(url + id, {
      method: 'delete',
    }).then((response) => {
      if (response.status === 200) {
        this.getApi(url, category)
      }
    })
  }

  addApi = (url, data, category) => {
    //this.setDateTime() TODO: see why date/time is not being included in data

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          this.getApi(url, category)
        }
      })
      .catch((err) => console.error(err))

    this.resetState()
  }

  updateApi = (url, id, data, category) => {
    fetch(url + id, {
      method: 'put',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          this.getApi(url, category)
        }
      })
      .catch((err) => console.error(err))

    this.resetState()
  }

  deleteFinished = () => {
    const finishedArray = Array.from(document.querySelectorAll('[checked]'))
    const finishedIds = finishedArray.map((node) => {
      return node.id
    })
    finishedIds.forEach((id) => {
      this.deleteApi('https://localhost:5001/api/todo/', id, 'todos')
    })
  }

  clearAllCheck = () => {
    const finishedArray = Array.from(document.querySelectorAll('[checked]'))
    if (finishedArray.length === 0) {
      // return <NoneSelectedModal />
      this.setState({ target: '#noneSelectedModal' })
    } else {
      this.setState({ target: '#clearAllModal' })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <Header /> */}
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
          disabled={this.state.disabled}
          deleteFinished={this.deleteFinished}
          getApi={this.getApi}
          clearAllCheck={this.clearAllCheck}
          target={this.state.target}
        />
      </div>
    )
  }
}

export default App
