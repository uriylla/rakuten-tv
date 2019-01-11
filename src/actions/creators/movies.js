import {  REQUEST_MOVIES_LIST,  RECIEVE_MOVIES_LIST } from '../types/movies'

export const requestMoviesList = (name) => ({
  type:  REQUEST_MOVIES_LIST,
  name
})

export const recieveMoviesList = (name, movies) => ({
  type: RECIEVE_MOVIES_LIST,
  name,
  movies
})