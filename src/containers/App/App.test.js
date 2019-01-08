import { App, mapDispatchToProps} from '../App/App'
import { fetchHouses } from '../../thunks/fetchHouses'

jest.mock('../../thunks/fetchHouses')
describe('App', () => {

  it('mapDispatchToProps calls dispatch with an fetchHouses thunks when fetchHouses is dipatched', async () => {
    const mockDispatch = jest.fn()
    const toDispatch = fetchHouses('some url')

    const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchHouses('some url')

    expect(mockDispatch).toHaveBeenCalledWith(toDispatch)
  })
  it('should call fetchHouses on componetDidMount', () => {
    
  })
})