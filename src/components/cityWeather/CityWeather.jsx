import React from 'react';
import './CityWeather.scss';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';
import wind from '../../utilities/assets/wind.png';

export class CityWeather extends React.Component {
    getWeatherIcon = () => {
        if (this.props.weatherId >= 200 && this.props.weatherId < 300) {
            return storm;
        }
        if (this.props.weatherId >= 300 && this.props.weatherId < 500) {
            return rain;
        }
        if (this.props.weatherId >= 500 && this.props.weatherId < 600) {
            return rain;
        }
        if (this.props.weatherId >= 600 && this.props.weatherId < 700) {
            return snow;
        }
        if (this.props.weatherId >= 700 && this.props.weatherId < 800) {
            return fog;
        }
        if (this.props.weatherId === 800) {
            return sun;
        }
        if (this.props.weatherId >= 801 && this.props.weatherId < 900) {
            return cloud;
        }
    }

    render() {
        return (
            <div className='home__city-weather city-weather'>
                <div className='city-weather__city-name'>{this.props.cityName}</div>
                <img className='city-weather__weather-icon' src={this.getWeatherIcon()}/>
                <div className='city-weather__weather-description'>
                    <div className='city-weather__city-temperature'>{this.props.temperature} ℃</div>
                    <div className='city-weather__weather-main'>{this.props.weatherMain}</div>
                </div>
            </div>
        )
    }
}