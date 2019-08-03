export default (state = [], action) => {
  const newNote = [action.payload]
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, ...newNote]
    default:
      return state
  }
}
