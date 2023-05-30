import { render, screen } from '@testing-library/react';
import MovieCardModal from '../components/movieCard/modal/MovieCardModal.component';

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

describe('MovieCardModal', () => {
  test('should render movie details', async () => {
    render(<MovieCardModal movie={movie} isOpen={true} toggle={() => {}} />);
    
    await screen.findByText("Movie 1 (1998)");
    await screen.findByText("director");
    await screen.findByText("some description");
    await screen.findByText("Rate: 7");
    await screen.findByText("actor1, actor2 and actor3.");
    
    expect(screen.getByText("Movie 1 (1998)")).toBeInTheDocument();
    expect(screen.getByText("director")).toBeInTheDocument();
    expect(screen.getByText("some description")).toBeInTheDocument();
    expect(screen.getByText("Rate: 7")).toBeInTheDocument();
    expect(screen.getByText("actor1, actor2 and actor3.")).toBeInTheDocument();
  });
});
