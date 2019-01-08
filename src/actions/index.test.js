import { addHouseData, isLoading, hasErrored} from '../actions'

describe('actions', () => {
  it('should have a type of ADD_DATA', () => {
    const expectedAction = {
      type: 'ADD_DATA',
      data: [],
    }
    const result = addHouseData([])
    expect(result).toEqual(expectedAction)
  })
  it('should have a type of HAS_ERROR', () => {
    const expectedAction = {
      type: 'HAS_ERROR',
      error: ''
    }
    const result = hasErrored('')
    expect(result).toEqual(expectedAction)
  })
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = isLoading(true)
    expect(result).toEqual(expectedAction)
  })
})