import './App.css';

import SearchBar from './components/searchBar/SearchBar.component';
import MoviesBlock from './components/moviesBlock/MoviesBlock.component';
import Movie from './models/Movie';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://localhost:7131/GetAll', {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      });

      const movies = response.data;
      setMovies(movies);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };

  fetchMovies();

  const [filteredItems, setFilteredItems] = useState<Movie[]>(movies);

      return (
        <div className="App" data-testid="app">
          <div className='AppHeading'>
            <p>MOVIE HUB</p>
            <SearchBar movies={movies} filteredItems={filteredItems} setFilteredItems={setFilteredItems}/>
          </div>
          <MoviesBlock filteredMovies={filteredItems}/>
        </div>
      );
}

export default App;
