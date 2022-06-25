import { useContext, useState } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../store/favorites-context';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { IconContext } from 'react-icons';
import CardForModal from '../ui/CardForModal';

function MeetupItem(props) {
  const [showMore, setShowMore] = useState(true);
  const [cardIsShown, setCardIsShown] = useState(false);

  function showCardHandler() {
    setCardIsShown(true);
  }

  function hideCardHandler() {
    setCardIsShown(false);
  }

  const favoritesCtx = useContext(FavoritesContext);

  let description = props.description;
  const max = 94;
  if (description.length < max) {
    return <p>{description}</p>;
  }

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  }
  return (
    <IconContext.Provider value={{ size: '3em', color: 'rgb(246, 88, 88)' }}>
      {cardIsShown && (
        <CardForModal description={description} onClose={hideCardHandler} />
      )}
      <Card>
        <li className={classes.item}>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            {showMore ? (
              <p>{description.substring(0, max)} </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className={classes.actions}>
            <button className={classes.more_button} onClick={showCardHandler}>
              Read More
            </button>
            <button
              className={classes.favorite_button}
              onClick={toggleFavoritesStatusHandler}
            >
              {itemIsFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </button>
          </div>
        </li>
      </Card>
    </IconContext.Provider>
  );
}

export default MeetupItem;
