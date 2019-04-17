import React, { Component } from 'react';
import './Weather.scss';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Menu from './components/menu/Menu';

export default class Weather extends Component {
    render() {
        return (
            <div className="weather">
                <Header />
                <Main />
                <Menu />
            </div>
        );
    }
}
