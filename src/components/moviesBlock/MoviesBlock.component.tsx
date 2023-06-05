import Movie from '../../models/Movie';
import MovieCard from '../movieCard/MovieCard.component';

import './MoviesBlock.styles.css';

interface Props {
    filteredMovies: Movie[]
}
const MoviesBlock = ({ filteredMovies } : Props) => {
    return (
      <div className="moviesGrid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.Title} movie={movie} />
        ))}
      </div>
    );
};  

export default MoviesBlock;