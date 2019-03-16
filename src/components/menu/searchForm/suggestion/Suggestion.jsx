import React from 'react';
import './Suggestion.scss';

export class Suggestion extends React.Component {
    render() {
        return (
            <div className='search-form__suggestion'>
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