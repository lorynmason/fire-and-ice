export const houseReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_DATA':
      return action.data
    default:
      return state
  }
}

export default houseReducer