import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import CardContent from './CardContent/CardContent';
import AddContent from './AddContent/AddContent';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetailsContent = ({ details }) => {
  const { title, poster_path, vote_average, overview, genres } = details;
  const userRate = (vote_average * 10).toFixed(1);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_IMG = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const image = poster_path ? BASE_IMG + poster_path : DEFAULT_IMG;

  return (
    <Suspense fallback={<Loader />}>
      <GoBackBtn />
      <CardContent movieData={{ title, userRate, overview, genres, image }} />
      <AddContent />
    </Suspense>
  );
};

export default MovieDetailsContent;
