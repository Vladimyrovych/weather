import React from 'react';
import './CityWeatherDetails.scss';
import { CityWeatherDetailsDay } from './cityWeatherDetailsDay/CityWeatherDetailsDay';

export class CityWeatherDetails extends React.Component {
    state = {
        weatherHoursArray: [],
    }

    weatherRequestHours = () => {
        //const url = `http://api.openweathermap.org/data/2.5/forecast?id=${this.props.cityKey}&APPID=e5a8a2a8b07305119916d5ccc53716f0&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const weatherHoursArray = response.list.map((datetime) => {
                return {
                    datetime: datetime.dt_txt,
                    temperature: datetime.main.temp,
                    humidity: datetime.main.humidity,
                    pressure: datetime.main.pressure,
                    weatherDescription: datetime.weather[0].description,
                    weatherId: datetime.weather[0].id,
                    windSpeed: datetime.wind.speed,
                    windDeg: datetime.wind.deg,
                }
            });
            weatherHoursArray.forEach(element => {
                element.cityName = response.city.name;
            });
            this.setState({weatherHoursArray: weatherHoursArray});
        })
        .catch((e) => console.log(e));
    }


    render() {
        if (this.state.weatherHoursArray.length === 0) {
            this.weatherRequestHours();    
        }
        let hoursWeather = null;
        if (this.state.weatherHoursArray.length > 0) {
            hoursWeather = this.state.weatherHoursArray.map((datetime) => {
                return <CityWeatherDetailsDay
                    datetime={datetime.datetime}
                    temperature={datetime.temperature}
                    humidity={datetime.humidity}
                    pressure={datetime.pressure}
                    weatherDescription={datetime.weatherDescription}
                    weatherId={datetime.weatherId}
                    windSpeed={datetime.windSpeed}
                    windDeg={datetime.windDeg}
                />
            })
        }
        
        return (
            <div className='weather__city city'>
                <div className='city__city-name'>{this.state.weatherHoursArray[0] === undefined? null: this.state.weatherHoursArray[0].cityName}</div>
                <div className='city__weather-header'>
                    <div className='city__empty-block'></div>
                    <div className='city__empty-block'></div>
                    <div className='city__temperature'>Температура, °C</div>
                    <div className='city__humidity'>Влажность, %</div>
                    <div className='city__pressure'>Давление, гПа</div>
                    <div className='city__weather-description'>Погодное явление</div>
                    <div className='city__wind-speed'>Скорость ветра, м/с</div>
                    <div className='city__wind-deg'>Направление ветра, град.</div>
                </div>
                {hoursWeather}
            </div>
        )
    }
}