import './App.css';

import SearchBar from './components/searchBar/SearchBar.component';
import MoviesBlock from './components/moviesBlock/MoviesBlock.component';
import Movie from './models/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://localhost:7131/GetAll');
      const movies = response.data;
      
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div className="App" data-testid="app">
      <div className='AppHeading'>
        <p>MOVIE HUB</p>
        <SearchBar movies={movies} setFilteredItems={setFilteredMovies}/>
      </div>
      <MoviesBlock filteredMovies={filteredMovies}/>
    </div>
  );
}

export default App;
