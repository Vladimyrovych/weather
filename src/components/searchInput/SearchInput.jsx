import React from 'react';
import './SearchInput.scss';
import cities from '../../utilities/city.list.min.json';
import Suggestion from '../suggestion/Suggestion';

const SearchInput = ({placeholder, currentValue, onChange: onChangeProp, onClick: onClickProp}) => {
    const onChange = (e) => {
        onChangeProp(e.currentTarget.value);
    }

    const onClick = (cityName, cityKey) => {//добавление города в избранные и скрытие подсказки
        onClickProp(cityName, cityKey);
    }

    const suggestions = []
    if (currentValue.length > 1) {
        for (let index = 0; 10 > suggestions.length && index < cities.length; index++) {
            const city = cities[index];
            if (city.name.toLowerCase().slice(0, currentValue.length) === currentValue.toLowerCase()) {
                suggestions.push(
                    <Suggestion 
                        cityName={city.name} 
                        cityKey={city.id} 
                        cityCountry={city.country} 
                        onClick={onClick}
                    />
                )
            }
        }    
    }

    return (
        <>
            <input 
                className='search-form__input'
                type="search"
                placeholder={placeholder}
                value={currentValue}
                onChange={onChange}
            />
            {suggestions}
        </>
    )
}

export default SearchInput;