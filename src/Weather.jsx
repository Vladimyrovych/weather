import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Weather.scss';

export default class Weather extends Component {
    render() {
        return (
            <div className="App">
                Weather...
                <ul>
                    <li><Link to='/'>Weather</Link></li>
                    <li><Link to='/details'>Details</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}