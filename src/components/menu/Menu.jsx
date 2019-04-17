import React from 'react';
import './Menu.scss';
import SearchForm from '../searchForm/SearchForm';
import FavoriteCity from '../favoriteCity/FavoriteCity';

class Menu extends React.Component {
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
        let hiddenClassName = 'weather__menu menu';
        if (this.state.isHidden === true) {
            hiddenClassName += ' menu_hidden';
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
                            onClick={this.showMenu}
                        />
                    );
                }
            }
        }
        
        return (
            <div className={hiddenClassName}>
                <div className='menu__block'>
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

export default Menu;