import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotesAction } from '../../actions/noteAction'
import Note from './Note'
import CreateNote from './CreateNote'
import './Notes.scss'

class Notes extends Component {
  componentDidMount() {
    this.props.fetchNotes()
  }
  render() {
    const { notes } = this.props
    return (
      <article className="notes">
        <section className="notes__create--item">
          <CreateNote />
        </section>
        <div className="notes__container--items">
          {notes.map(({ title, description, id }) => (
            <Note id={id} key={id} title={title} description={description} />
          ))}
        </div>
      </article>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
})

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotesAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)
