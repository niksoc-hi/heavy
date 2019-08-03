export default function noteReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = [action.payload]
      return [...state, ...newNote]
    case 'GET_NOTE':
      return state
    case 'FETCH_NOTES':
      const fetchedNotes = [...action.payload.data.results]
      return [...state, ...fetchedNotes]
    case 'DELETE_NOTE':
      return [...state.filter(note => note.id !== action.payload)]
    default:
      return state
  }
}
