import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addfavoritehandler(favoriteMeetup) {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
