export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = [action.payload]
      return [...state, ...newNote]
    case 'GET_NOTE':
      return state
    case 'FETCH_NOTES':
      const fetchedNotes = [...action.payload.data.results]
      return [...fetchedNotes]
    case 'DELETE_NOTE':
      if (state.length === 0) {
        return []
      } else {
        return [...state.filter(note => note.id !== action.payload)]
      }
    default:
      return state
  }
}
