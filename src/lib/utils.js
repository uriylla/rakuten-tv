export const filterMovieData = ({id, images, highlited_score}) => (
  {id, artwork_url: images.artwork, score: highlited_score}
)