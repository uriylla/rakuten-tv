import {  REQUEST_MOVIES_LISTS,  RECIEVE_MOVIES_LISTS, SELECT_MOVIE, UNSELECT_MOVIE } from '../types/movies'

export const requestMoviesLists = (lists) => ({
  type:  REQUEST_MOVIES_LISTS,
  lists
})

export const recieveMoviesLists = (lists) => ({
  type: RECIEVE_MOVIES_LISTS,
  lists: lists
})