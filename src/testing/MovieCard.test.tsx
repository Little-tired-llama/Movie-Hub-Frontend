import { screen, render, fireEvent } from '@testing-library/react';
import MovieCard from '../components/movieCard/MovieCard.component';

const movie = {
    Title: 'Movie 1',
    Description: 'some description',
    Year: 1998,
    Rate: 7,
    Director: 'director',
    Actors: ['actor1', 'actor2', 'actor3'],
    TeaserUrl: 'teaserUrl1',
    PosterUrl: 'posterUrl1',
};

test('MovieCard should toggle modal when clicked', () => {
    render(<MovieCard movie={movie} />);
    const movieCard = screen.getByText('Movie 1 (1998)');

    fireEvent.click(movieCard);

    expect(screen.getAllByText('Movie 1 (1998)')).toHaveLength(2);
});
