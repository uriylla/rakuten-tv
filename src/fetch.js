import settings from './settings'
import path from 'path'

export const fetchList = async (name) => {
  try {
    const { API_BASE_URL, API_QUERY_PARAMS } = settings;
    const url = API_BASE_URL + 'lists/' + name + API_QUERY_PARAMS
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchLists = (lists) => {
  return Promise.all(lists.map(list => fetchList(list)))
}