import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './assets/iconfinder_weather_87934.png';

export class Header extends React.Component {
    render() {
        return (
            <header className='weather__header header'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/city'>City</Link></li>
                </ul>
                <div className='header__logo'>
                    <img className='header__img' src={logo}/>
                </div>
            </header>
        )
    }
}