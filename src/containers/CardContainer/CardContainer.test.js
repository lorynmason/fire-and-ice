import { CardContainer, mapStateToProps } from './CardContainer'

describe('CardContainer', () => {
  it('mapStateToProps should return house array and isLoading bool', () => {
    const mockHouses = [{name: 'House Corbray of Heart\'s Home'}, {name: 'House Dayne of Starfall'}]
    const mockState = {
      house: mockHouses,
      isLoading: false,
      error: 'error'
    }
    const expected = {
      house: mockHouses,
      isLoading: false
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})