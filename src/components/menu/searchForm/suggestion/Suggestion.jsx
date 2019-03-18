import React from 'react';
import './Suggestion.scss';

export class Suggestion extends React.Component {
    onClick = () => {//добавление города в избранные
        this.props.onClick(this.props.cityName, this.props.cityKey);
    }

    render() {
        return (
            <div className='search-form__suggestion' onClick={this.onClick}>
                <div className='search-form__suggestion-city'>
                    {this.props.cityName}
                </div>
                <div className='search-form__suggestion-country'>
                    {this.props.cityCountry}
                </div>
            </div>
        )
    }
}