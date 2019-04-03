import React from 'react';
import './CityWeatherDetailsDay.scss';
import cloud from '../../../utilities/assets/cloudy.png';
import fog from '../../../utilities/assets/foggy.png';
import rain from '../../../utilities/assets/rainfall.png';
import snow from '../../../utilities/assets/snow.png';
import storm from '../../../utilities/assets/storm.png';
import sun from '../../../utilities/assets/sun.png';


export class CityWeatherDetailsDay extends React.Component {
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
            <div className='city__weather-data weather-data'>
                <div className='weather-data__datetime'>{this.props.datetime}</div>
                <div className='weather-data__icon-block'>
                    <img className='weather-data__icon' src={this.getWeatherIcon()}/>
                </div>
                <div className='weather-data__temperature temperature'>
                    <div className='temperature__name'>Темп.</div>
                    <div className='temperature__value'>{this.props.temperature}°C</div>
                </div>
                <div className='weather-data__humidity humidity'>
                    <div className='humidity__name'>Влажн.</div>
                    <div className='humidity__value'>{this.props.humidity}%</div>
                </div>
                <div className='weather-data__pressure pressure'>
                    <div className='pressure__name'>Давл.</div>
                    <div className='pressure__value'>{this.props.pressure}гПа</div>
                </div>
                <div className='weather-data__description description'>
                    <div className='description__name'>Погода</div>
                    <div className='description__value'>{this.props.weatherDescription}</div>
                </div>
                <div className='weather-data__wind-speed wind-speed'>
                    <div className='wind-speed__name'>Скор. вет.</div>
                    <div className='wind-speed__value'>{this.props.windSpeed}м/с</div>
                </div>
                <div className='weather-data__wind-deg wind-deg'>
                    <div className='wind-deg__name'>Напр. вет.</div>
                    <div className='wind-deg__value'>{this.props.windDeg}</div>
                </div>
            </div>
        )
    }
}