import React from 'react';
import './CityWeather.scss';
import { Link } from 'react-router-dom';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';

const CityWeather = ({cityName, weatherId, cityKey, temperature, weatherMain}) => {
   const getWeatherIcon = () => {
        if (weatherId >= 200 && weatherId < 300) {
            return storm;
        }
        if (weatherId >= 300 && weatherId < 500) {
            return rain;
        }
        if (weatherId >= 500 && weatherId < 600) {
            return rain;
        }
        if (weatherId >= 600 && weatherId < 700) {
            return snow;
        }
        if (weatherId >= 700 && weatherId < 800) {
            return fog;
        }
        if (weatherId === 800) {
            return sun;
        }
        if (weatherId >= 801 && weatherId < 900) {
            return cloud;
        }
    }

    return (
        <Link to={`/city/${cityKey}`} className='home__city-weather city-weather'>
            <div className='city-weather__city-name'>{cityName}</div>
            <img className='city-weather__weather-icon' src={getWeatherIcon()}/>
            <div className='city-weather__weather-description'>
                <div className='city-weather__city-temperature'>{temperature} °C</div>
                <div className='city-weather__weather-main'>{weatherMain}</div>
            </div>
        </Link>
    )
}

export default CityWeather;