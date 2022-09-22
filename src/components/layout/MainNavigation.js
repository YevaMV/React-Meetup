import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="new-meetup">Create Meetup</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="favorites">
                Favorites
                <span className={classes.badge}>
                  {favoriteCtx.totalFavorites}
                </span>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>LogOut</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
