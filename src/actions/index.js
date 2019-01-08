export const hasErrored = (error) => {
  return {
    type: 'HAS_ERROR',
    error
  }
}

export const addHouseData = (data) => {
  return {
    type: 'ADD_DATA',
    data
  }
}

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}