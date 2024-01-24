import css from './Cast.module.css';

const CastList = ({ cast }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_IMG = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

   return (
    <>
      <h2 className={css.cast_title}>Cast:</h2>
      {cast.length ? (
        <ul className={css.cast_list}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.cast_item}>
              <img
                className={css.cast_img}
                src={profile_path ? BASE_IMG + profile_path : DEFAULT_IMG}
                alt={name}
                loading="lazy"
              />
              <p className={css.cast_info}>
                <b>Name:</b> {name}
              </p>
              <p className={css.cast_info}>
                <b>Character:</b> {character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Cast information will be available soon</h2>
      )}
    </>
  );
};

export default CastList;
