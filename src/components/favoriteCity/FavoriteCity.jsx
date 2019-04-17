import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';

const FavoriteCity = ({cityName, cityKey, removeFavoriteCity: removeFavoriteCityProp, onClick: onClickProp}) => {
    const removeFavoriteCity = () => {
        let currentStorage = JSON.parse(localStorage.getItem('favoriteCities'));
        delete currentStorage[cityKey];
        localStorage.setItem('favoriteCities', JSON.stringify(currentStorage));
        removeFavoriteCityProp();
    }

    const onClick = () => {
        onClickProp();
    }

    return (
        <div className='menu__favorite-city favorite-city'>
            <Link to={`/city/${cityKey}/`} onClick={onClick} className='favorite-city__name-btn'>{cityName}</Link>
            <button className='favorite-city__close-btn' onClick={removeFavoriteCity}>X</button>
        </div>
    )
}

export default FavoriteCity;