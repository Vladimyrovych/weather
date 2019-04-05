import React from 'react';
import './CityBackground.scss';

export class CityBackground extends React.Component {
    render() {
        return (
            <div className='city__background background' style={{backgroundImage: `url(${this.props.url})`}} >
                {/* style={{backgroundImage: `url(${this.props.url})`}}
                <img className='background__image' src={this.props.url}/> */}
            </div>
        )
    }
}