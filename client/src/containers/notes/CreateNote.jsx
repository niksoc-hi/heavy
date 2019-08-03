import React, { Component } from 'react'
import { connect } from 'react-redux'
import { noteAction } from '../../actions/noteAction'
import { Button } from 'antd'
import './CreateNote.scss'

class CreateNote extends Component {
  state = {
    title: '',
    text: '',
  }

  handleTextChange = e => {
    this.setState({ ...this.state, text: e.target.value })
  }

  handleTitleChange = e => {
    this.setState({ ...this.state, title: e.target.value })
  }

  render() {
    const { addNote } = this.props
    return (
      <section className="createNote--container">
        <input
          placeholder="Title"
          className="note__input"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          placeholder="Take a note"
          className="note__text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <div>
          <Button type="primary" onClick={e => addNote({ ...this.state })}>
            Add Note
          </Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(noteAction(note)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNote)
