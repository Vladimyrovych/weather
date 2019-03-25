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
            <div className=''>
                <div className=''>{this.props.cityName}</div>
                <div className=''>{this.props.datetime}</div>
                <img src={this.getWeatherIcon()}/>
                <div className=''>{this.props.temperature}</div>
                <div className=''>{this.props.humidity}</div>
                <div className=''>{this.props.pressure}</div>
                <div className=''>{this.props.weatherDescription}</div>
                <div className=''>{this.props.weatherId}</div>
                <div className=''>{this.props.windDirection}</div>
                <div className=''>{this.props.windDeg}</div>
            </div>
        )
    }
}