import React from 'react';
import './FavoriteCity.scss';

export class FavoriteCity extends React.Component {
    removeFavoriteCity = () => {
        let currentStorage = JSON.parse(localStorage.getItem('favoriteCities'));
        delete currentStorage[this.props.cityKey]
        localStorage.setItem('favoriteCities', JSON.stringify(currentStorage));
        this.props.removeFavoriteCity();
    }

    render() {
        return (
            <div className='menu__favorite-city favorite-city'>
                <button className='favorite-city__name-btn'>{this.props.cityName}</button>
                <button className='favorite-city__close-btn' onClick={this.removeFavoriteCity}>X</button>
            </div>
        )
    }
}