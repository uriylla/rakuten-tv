import {  REQUEST_MOVIES_LISTS,  RECIEVE_MOVIES_LISTS, SELECT_MOVIE, UNSELECT_MOVIE } from '../types/movies'

export const requestMoviesLists = (lists) => ({
  type:  REQUEST_MOVIES_LISTS,
  lists
})

export const recieveMoviesLists = (lists) => ({
  type: RECIEVE_MOVIES_LISTS,
  lists: lists
})

export const selectMovie = (id, name) => ({
  type: SELECT_MOVIE,
  id,
  name
})

export const unselectMovie = () => ({
  type: UNSELECT_MOVIE
})