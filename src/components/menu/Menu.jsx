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
        this.setState({currentValue: cityName});
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
        
    }

    render() {
        let hiddenClassname = 'menu__block';
        if (this.state.isHidden === true) {
            hiddenClassname += ' menu__block_hidden';
        }

        let favoriteCities = [];
        if (localStorage.getItem('favoriteCities') !== null) {
            let favoriteCitiesStorage = JSON.parse(localStorage.getItem('favoriteCities'));
            for (const key in favoriteCitiesStorage) {
                if (favoriteCitiesStorage.hasOwnProperty(key)) {
                    const element = favoriteCitiesStorage[key];
                    favoriteCities.push(<FavoriteCity cityName={element}/>);
                }
            }
        }
        
        return (
            <div className='weather__menu menu'>
                <div className={hiddenClassname}>
                    <SearchForm placeholder='Find city...' onClick={this.onClick}/>
                    <div className='menu__favorite-city-container'>
                        {favoriteCities}
                    </div>
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