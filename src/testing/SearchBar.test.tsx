import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/searchBar/SearchBar.component';
import MoviesBlock from '../components/moviesBlock/MoviesBlock.component';
import Movie from '../models/Movie';

const movies : Movie[] = [
  {
    Title: 'Movie 1',
    Description: 'description 1',
    Year: 1998,
    Rate: 7,
    Director: 'director 1',
    Actors: ['actor1', 'actor2', 'actor3'],
    TeaserUrl: 'teaserUrl1',
    PosterUrl: 'posterUrl1',
  },
  {
    Title: 'Movie 2',
    Description: 'description 2',
    Year: 2005,
    Rate: 6,
    Director: 'director 2',
    Actors: ['actor4', 'actor5'],
    TeaserUrl: 'teaserUrl2',
    PosterUrl: 'posterUrl2',
  },
];

describe('SearchBar', () => {
  test('should filter movies based on search value', () => {
    let searchValue = '2';

    let filteredItems = [{
      Title: 'Movie 2',
      Description: 'description 2',
      Year: 2005,
      Rate: 6,
      Director: 'director 2',
      Actors: ['actor4', 'actor5'],
      TeaserUrl: 'teaserUrl2',
      PosterUrl: 'posterUrl2',
    }];

    render(<SearchBar movies={movies} filteredItems={filteredItems} setFilteredItems={()=>{}} />);
    render(<MoviesBlock filteredMovies={filteredItems} />);

    const searchInput = screen.getByPlaceholderText('Find the movie...');

    fireEvent.change(searchInput, { target: { searchValue } });

    expect(screen.queryByText('Movie 1 (1998)')).not.toBeInTheDocument();
    expect(screen.queryByText('Movie 2 (2005)')).toBeInTheDocument();
  });
});