import React from 'react';
import './SearchInput.scss';
import cities from '../../../../utilities/city.list.min.json';
import { Suggestion } from '../suggestion/Suggestion';

export class SearchInput extends React.Component {
    onChange = (e) => {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        const suggestions = []

        if (this.props.currentValue.length > 1) {
            console.log('!');
            
            for (let index = 0; 10 > suggestions.length && index < cities.length; index++) {
                const city = cities[index];
                // console.log(this.props.currentValue.toLowerCase());
                // console.log(city.name.toLowerCase().slice(0, this.props.currentValue.length + +1));

                if (city.name.toLowerCase().slice(0, this.props.currentValue.length) === this.props.currentValue.toLowerCase()) {
                    suggestions.push(<Suggestion cityName={city.name} cityCountry={city.country}/>)
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