export const hasErrorReducer = (state='', action) => {
  switch(action.type) {
    case 'HAS_ERORR':
      return action.error
    default:
      return state
  }
}