export const selectLists = (lists) => lists && lists.filter(list => !!list)

export const selectListById = (lists, id) => lists.find(list => list.id === id)

export const getSelectedMovie = ({selectedMovie}) => selectedMovie

export const getSelectedMovieName = ({selectedMovie}) => selectedMovie ? selectedMovie.name : undefined