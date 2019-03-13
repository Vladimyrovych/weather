import React from 'react';
import './Menu.scss';

export class Menu extends React.Component {
    render() {
        return (
            <div className='weather__menu menu'>
                <div className='menu__block menu__block_hidden'></div>
                <button className='menu__open-btn'>{'<<>>'}</button>
            </div>
        )
    }
}