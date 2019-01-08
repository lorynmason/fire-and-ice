import isLoadingReducer from './isLoadingReducer'

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return isLoading bool', () => {
    const expected = true
    const action = {
      type: 'ADD_DATA',
      isLoading: true
    }

    const result = isLoadingReducer(true, action)

    expect(result).toEqual(expected)
  })
})