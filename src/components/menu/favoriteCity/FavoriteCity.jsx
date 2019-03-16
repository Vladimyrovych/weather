import React from 'react';
import './FavoriteCity.scss';

export class FavoriteCity extends React.Component {
    render() {
        return (
            <div className='menu__favorite-city favorite-city'>
                <button className='favorite-city__name-btn'>{this.props.cityName}</button>
                <button className='favorite-city__close-btn'>X</button>
            </div>
        )
    }
}