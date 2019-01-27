export const selectLists = (lists) => lists && lists.filter(list => !!list)

export const selectListById = (lists, id) => lists.find(list => list.id === id)

export const getMovieNameById = ({lists}, id) => {
  if(!lists) return undefined;
  const match = lists
    .map(({movies}) => movies.find(mov => mov.id === id))
    .filter(movie => !!movie)
  return match[0] ? match[0].name : undefined
}