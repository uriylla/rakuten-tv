import settings from './settings'
import path from 'path'

export const fetchList = async (name) => {
  try {
    const { API_BASE_URL, API_QUERY_PARAMS } = settings;
    const url = API_BASE_URL + 'lists/' + name + API_QUERY_PARAMS
    const response = await fetch(url)
    const movies = await response.json()
    return movies
  } catch (e) {
    console.log(e)
  }
}
