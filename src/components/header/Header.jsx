import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './assets/iconfinder_weather_87934.png';

export class Header extends React.Component {
    render() {
        return (
            <header className='weather__header header'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img className='header__img' src={logo}/>
                    </Link>
                </div>
            </header>
        )
    }
}