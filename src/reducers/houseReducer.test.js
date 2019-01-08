import houseReducer from './houseReducer'

describe('houseReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = houseReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should return data', () => {
    const expected = [{name: 'House Corbray of Heart\'s Home'}, {name: 'House Dayne of Starfall'}]
    const action = {
      type: 'ADD_DATA',
      data: expected
    }

    const result = houseReducer([], action)

    expect(result).toEqual(expected)
  })
})