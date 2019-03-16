import React from 'react';
import './SearchInput.scss';
import cities from '../../../../utilities/city.list.min.json';
import { Suggestion } from '../suggestion/Suggestion';

export class SearchInput extends React.Component {
    onChange = (e) => {
        this.props.onChange(e.currentTarget.value);
    }

    onClick = (cityName, cityKey) => {
        this.props.onClick(cityName, cityKey);
    }

    render() {
        const suggestions = []

        if (this.props.currentValue.length > 1) {
            for (let index = 0; 10 > suggestions.length && index < cities.length; index++) {
                const city = cities[index];
                if (city.name.toLowerCase().slice(0, this.props.currentValue.length) === this.props.currentValue.toLowerCase()) {
                    suggestions.push(<Suggestion cityName={city.name} cityKey={city.id} cityCountry={city.country} onClick={this.onClick}/>)
                }
                
            }    
        }

        return (
            <>
                <input 
                    className='search-form__input'
                    type="search"
                    placeholder={this.props.placeholder}
                    value={this.props.currentValue}
                    onChange={this.onChange}
                />
                {suggestions}
            </>
        )
    }
}