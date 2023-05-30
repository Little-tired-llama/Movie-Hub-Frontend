import { screen, render } from '@testing-library/react';
import MoviesBlock from '../components/moviesBlock/MoviesBlock.component';
import Movie from '../models/Movie';

const movies : Movie[] = [
  {
    Title: "Movie 1",
    Description: "some description",
    Year: 1998,
    Rate: 7,
    Director: "director1",
    Actors: [
        "actor1",
        "actor2",
        "actor3"
    ],
    TeaserUrl: "teaserUrl",
    PosterUrl: "posterUrl"
  },
  {
    Title: "Movie 2",
    Description: "some description",
    Year: 2000,
    Rate: 8,
    Director: "director2",
    Actors: [
        "actor1",
        "actor2",
        "actor3"
    ],
    TeaserUrl: "teaserUrl",
    PosterUrl: "posterUrl"
  }
];

test('MoviesBlock should render movie cards', () => {
  render(<MoviesBlock filteredMovies={movies} />);
  expect(screen.getByText('Movie 1 (1998)')).toBeInTheDocument();
  expect(screen.getByText('Director: director1')).toBeInTheDocument();
  expect(screen.getByText('Movie 2 (2000)')).toBeInTheDocument();
  expect(screen.getByText('Director: director2')).toBeInTheDocument();
});
