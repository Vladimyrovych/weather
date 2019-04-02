import React from 'react';
import './FavoriteCity.scss';
import { Link } from 'react-router-dom';

export class FavoriteCity extends React.Component {
    removeFavoriteCity = () => {
        let currentStorage = JSON.parse(localStorage.getItem('favoriteCities'));
        delete currentStorage[this.props.cityKey]
        localStorage.setItem('favoriteCities', JSON.stringify(currentStorage));
        this.props.removeFavoriteCity();
    }

    onClick = () => {
        this.props.onClick()
    }

    render() {
        return (
            <div className='menu__favorite-city favorite-city'>
                <Link to={`/city/${this.props.cityKey}/`} onClick={this.onClick} className='favorite-city__name-btn'>{this.props.cityName}</Link>
                <button className='favorite-city__close-btn' onClick={this.removeFavoriteCity}>X</button>
            </div>
        )
    }
}