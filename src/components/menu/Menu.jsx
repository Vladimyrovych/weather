import React from 'react';
import './Menu.scss';
import {SearchForm} from './searchForm';
import {FavoriteCity} from './favoriteCity';

export class Menu extends React.Component {
    state = {
        isHidden: true,
    }

    showMenu = () => {
        this.setState({isHidden: !this.state.isHidden})
    }

    onChangeSearchInput = () => {

    }

    render() {
        let hiddenClassname = 'menu__block';
        if (this.state.isHidden === true) {
            hiddenClassname += ' menu__block_hidden';
        }

        return (
            <div className='weather__menu menu'>
                <div className={hiddenClassname}>
                    <SearchForm placeholder='Find city...' onChange={this.onChangeSearchInput}/>
                    <div className='menu__favorite-city-container'>
                        <FavoriteCity />
                        <FavoriteCity />
                        <FavoriteCity />
                        <FavoriteCity />
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