import hasErrorReducer from './hasErrorReducer.js'

describe('hasErrorReducer', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = hasErrorReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return isLoading bool', () => {
    const expected = 'error'
    const action = {
      type: 'HAS_ERORR',
      error: 'error'
    }

    const result = hasErrorReducer('', action)

    expect(result).toEqual(expected)
  })
})