import React from 'react';
import './Menu.scss';
import {SearchForm} from './searchForm';
import {FavoriteCity} from './favoriteCity';

export class Menu extends React.Component {
    state = {
        isHidden: true,
        currentValue: '',
    }

    showMenu = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    onClick = (cityName, cityKey) => {//добавление города в избранные
        if (localStorage.getItem('favoriteCities') === null) {
            let favoriteCities = {
                [cityKey]: cityName,
            }
            localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
        } else {
            let currentStorage = JSON.parse(localStorage.getItem('favoriteCities'));
            currentStorage[cityKey] = cityName;
            localStorage.setItem('favoriteCities', JSON.stringify(currentStorage));
        }
        this.setState({currentValue: cityName});
    }

    removeFavoriteCity = () => {
        this.setState({currentValue: ''});
    }

    render() {
        let hiddenClassName = 'menu__block';
        if (this.state.isHidden === true) {
            hiddenClassName += ' menu__block_hidden';
        }

        let favoriteCities = [];
        if (localStorage.getItem('favoriteCities') !== null) {
            let favoriteCitiesStorage = JSON.parse(localStorage.getItem('favoriteCities'));
            for (const key in favoriteCitiesStorage) {
                if (favoriteCitiesStorage.hasOwnProperty(key)) {
                    const element = favoriteCitiesStorage[key];
                    favoriteCities.push(
                        <FavoriteCity 
                            cityName={element} 
                            cityKey={key}
                            removeFavoriteCity={this.removeFavoriteCity}
                        />
                    );
                }
            }
        }
        
        return (
            <div className='weather__menu menu'>
                <div className={hiddenClassName}>
                    <SearchForm placeholder='Find city...' onClick={this.onClick}/>
                    {favoriteCities}
                </div>
                <button className='menu__open-btn' onClick={this.showMenu}>
                    <div className='menu__btn-line'></div>
                    <div className='menu__btn-line'></div>
                    <div className='menu__btn-line'></div>
                </button>
            </div>
        )
    }
}