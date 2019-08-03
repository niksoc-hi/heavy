import React, { Component } from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import './Notes.scss'

class Notes extends Component {
  render() {
    return (
      <div className="notes__container">
        <CreateNote />
        <Note
          title="Test"
          content="This is a Test Note aksdg asdjghjsakdhas sakhdjsahdksjad askdhksjahdsad kasjdhsadbsa dsajhas"
        />
      </div>
    )
  }
}

export default Notes
