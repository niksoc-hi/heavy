import React, { Component } from 'react'
import { connect } from 'react-redux'
import { noteAction } from '../../actions/noteAction'
import { Button } from 'antd'
import './CreateNote.scss'

class CreateNote extends Component {
  state = {
    title: '',
    description: '',
  }

  handleTextChange = e => {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleTitleChange = e => {
    this.setState({ ...this.state, title: e.target.value })
  }

  clearInput = () => {
    this.setState({ title: '', description: '' })
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
          value={this.state.description}
          onChange={this.handleTextChange}
        />
        <div>
          <Button
            type="primary"
            onClick={e => {
              this.clearInput()
              addNote({ ...this.state })
            }}
          >
            Add Note
          </Button>
          <Button type="danger" onClick={this.clearInput}>
            Clear
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
