import React from 'react';
import './Suggestion.scss';

const Suggestion = ({cityName, cityKey, cityCountry, onClick: onClickProp}) => {
    const onClick = () => {//добавление города в избранные
        onClickProp(cityName, cityKey);
    }

    return (
        <div className='search-form__suggestion' onClick={onClick}>
            <div className='search-form__suggestion-city'>
                {cityName}
            </div>
            <div className='search-form__suggestion-country'>
                {cityCountry}
            </div>
        </div>
    )
}

export default Suggestion;