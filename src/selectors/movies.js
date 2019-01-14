import { filterMovieData } from '../lib/utils'

export const getFormatedLists = (lists) => {
  if(typeof lists === 'undefined') return undefined;
  const names = Object.keys(lists)
  return names.reduce((acc, name) => {
    const data = lists[name]
    acc[list] = {
      name: data.data.name,
      movies: data.data.contents.data.map(movie => filterMovieData(movie))
    }
    return acc
  }, {})
}

export const selectList = (lists, name) => {
  if(typeof lists === 'undefined') return undefined;
  if(typeof lists[name] === 'undefined') return undefined;
  return {
    name: lists[name].data.name,
    movies: lists[name].data.contents.data.map(movie => filterMovieData(movie))
  }
}

export const getLoadedLists = (lists) => {
  if(typeof lists === 'undefined') return undefined
  const names = Object.keys(lists)
  return names
}