import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../meetup/MeetupList';

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites} />
    </section>
  );
}

export default Favorites;
