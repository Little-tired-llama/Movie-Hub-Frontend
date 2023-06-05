import { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import Movie from '../../models/Movie';

import './SearchBar.styles.css';

interface Props {
  movies: Movie[];
  filteredItems: Movie[];
  setFilteredItems: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const SearchBar = ({ movies, filteredItems, setFilteredItems } : Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortParameter, setSortParameter] = useState('title');

  useEffect(() => {
    const filteredAndSorted = movies.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.Director.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (sortParameter === 'title') {
      filteredAndSorted.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortParameter === 'year') {
      filteredAndSorted.sort((a, b) => a.Year - b.Year);
    } else if (sortParameter === 'rate') {
      filteredAndSorted.sort((a, b) => a.Rate - b.Rate);
    } else {
      console.log('i am a stupid computer');
    }

    setFilteredItems(filteredAndSorted);
  }, [searchValue, sortParameter]);

  return (
    <div className="searchBar">
      <div className="sortContainer">
        <BsFilter />
        <span>sort by</span>
        <button onClick={() => setSortParameter('title')}>title</button>
        <button onClick={() => setSortParameter('year')}>year</button>
        <button onClick={() => setSortParameter('rate')}>rate</button>
      </div>
      <input
        className="searchInput"
        placeholder="Find the movie..."
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
