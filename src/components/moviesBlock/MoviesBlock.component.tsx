import Movie from '../../models/Movie';
import MovieCard from '../movieCard/MovieCard.component';
import MovieCardModal from '../movieCard/modal/MovieCardModal.component';
import { useState } from 'react';

import './MoviesBlock.styles.css';

interface Props {
    filteredMovies: Movie[]
}
const MoviesBlock = ({ filteredMovies }: Props) => {
    return (
      <div className="moviesGrid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.Title} movie={movie} />
        ))}
      </div>
    );
};  

export default MoviesBlock;