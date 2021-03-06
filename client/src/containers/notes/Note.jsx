import React from 'react'
import { connect } from 'react-redux'
import { deleteNoteAction } from '../../actions/noteAction'
import { Card, Button } from 'antd'
import './Note.scss'

function Note({ id, title, description, deleteNote }) {
  return (
    <Card className="note__card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        className="note__delete--button"
        type="danger"
        onClick={e => {
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
