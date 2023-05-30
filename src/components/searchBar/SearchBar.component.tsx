import { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import Movie from '../../models/Movie';

import './SearchBar.styles.css';

interface Props {
  movies: Movie[],
  filteredItems: Movie[],
  setFilteredItems: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const SearchBar = ({ movies, filteredItems, setFilteredItems }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortParameter, setSortParameter] = useState('title');

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.Director.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [movies, searchValue]);

  useEffect(() => {
    const sorted = [...filteredItems];
    if (sortParameter === 'title') {
      sorted.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortParameter === 'year') {
      sorted.sort((a, b) => a.Year - b.Year);
    } else if (sortParameter === 'rate') {
      sorted.sort((a, b) => a.Rate - b.Rate);
    } else {
      console.log('i am stupid computer');
    }
    setFilteredItems(sorted);
  }, [sortParameter]);

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
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
