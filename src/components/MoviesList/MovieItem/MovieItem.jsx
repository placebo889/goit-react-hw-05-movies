import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

const MovieItem = ({ title, id, img }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_IMG = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { pathname } = useLocation();

  const imagePath = img ? BASE_IMG + img : DEFAULT_IMG;
  
  return (
    <li className={css.movie_item}>
      <Link className={css.movie_link} to={`/movies/${id}`} state={{ from: pathname }}>
        <img className={css.movie_img} src={imagePath} alt={title} loading="lazy" />
        <p className={css.movie_title}>{title}</p>
      </Link>
    </li>
  );
};

export default MovieItem;
