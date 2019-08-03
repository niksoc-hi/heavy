import React from 'react'
import { connect } from 'react-redux'
import { deleteNoteAction } from '../../actions/noteAction'
import { Card, Button } from 'antd'
import './Note.scss'

function Note(props) {
  return (
    <Card className="note__card">
      <h3>{props.title}</h3>
      <span>{props.description}</span>
      <Button
        className="note__delete--button"
        type="danger"
        onClick={e => {
          props.deleteNote(props.id)
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
