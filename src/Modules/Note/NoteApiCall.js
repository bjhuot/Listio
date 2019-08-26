import { Component } from 'react'

class NoteApiCall extends Component {
  componentDidMount() {
    this.props.getApi('https://localhost:5001/api/note/', 'notes')
  }
  render() {
    return null
  }
}

export default NoteApiCall
