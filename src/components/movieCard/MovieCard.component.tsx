import { useState } from 'react';
import Movie from '../../models/Movie';
import MovieCardModal from './modal/MovieCardModal.component';
import './MovieCard.styles.css';

interface Props {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => {
    const {Title, Year, Director, PosterUrl} = movie;
    
    const [modalIsOpened, setModalIsOpened] = useState(false);

    const toggle = () => {
        setModalIsOpened(!modalIsOpened);
    }

    return (
        <>
            <div className='movieCard'
                style={{ backgroundImage: `url(${PosterUrl})` }}
                onClick={toggle}
            >
                <div className='overlay'>
                    <p>{Title} ({Year})</p>
                    <p>Director: {Director}</p>
                </div>
            </div>
            <MovieCardModal isOpen={modalIsOpened} toggle={toggle} movie={movie} />
      </>
    );
}

export default MovieCard;