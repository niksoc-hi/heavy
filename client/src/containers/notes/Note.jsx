import React from 'react'
import { connect } from 'react-redux'
import { deleteNoteAction } from '../../actions/noteAction'
import { Card, Button } from 'antd'
import './Note.scss'

function Note({ id, title, description, deleteNote }) {
  return (
    <Card className="note__card">
      <h3>{title}</h3>
      <span>{description}</span>
      <Button
        className="note__delete--button"
        type="danger"
        onClick={e => {
          e.preventDefault()
          deleteNote(id)
        }}
      >
        Delete
      </Button>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNoteAction(id)),
})

export default connect(
  null,
  mapDispatchToProps
)(Note)
