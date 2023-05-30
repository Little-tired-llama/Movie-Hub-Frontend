import Movie from '../../../models/Movie';
import './MovieCardModal.styles.css';

interface Props {
    movie: Movie,
    isOpen: boolean,
    toggle: () => void
}

const MovieCardModal = ({ isOpen, toggle, movie }: Props) => {
    const { Title, Description, Year, Rate, Director, Actors, TeaserUrl } = movie;

    const castDisplayString = () => {
      let cast = Actors.join(", ");
      const lastCommaIndex = cast.lastIndexOf(",");
      if (lastCommaIndex !== -1) {
        cast = cast.slice(0, lastCommaIndex) + " and" + cast.slice(lastCommaIndex + 1);
      }
      cast += ".";
      return cast;
    };
    
    return (
        <>
          {isOpen && (
            <div className="movieModalOverlay" onClick={toggle}>
              <div className="movieModalContent">
                <div className='heading'>
                    <h2>{Title} ({Year})</h2>
                    <h3>Rate: {Rate}</h3>
                </div>
                <div className='infoBlock'>
                  <p>{Description}</p>
                  <p><b>Director:</b> {Director}</p>
                  <p>
                    <b>Cast:</b> {castDisplayString()}
                  </p>
                </div>
                <div className="videoWrapper">
                  <iframe
                    title={Title}
                    width="100%"
                    height="315px"
                    src={`https://www.youtube.com/embed/${TeaserUrl}`}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default MovieCardModal;