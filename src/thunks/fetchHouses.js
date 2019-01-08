import { hasErrored, isLoading, addHouseData } from '../actions'

export const fetchHouses = (url) => {
  console.log(1)
  return async (dispatch) => {
    console.log(2)
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        console.log(response)
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const houseData = await response.json()
      console.log(houseData)
      dispatch(addHouseData(houseData))
    } catch (err) {
      console.log(err.message)
      dispatch(hasErrored(err.message))
    }
  }
}