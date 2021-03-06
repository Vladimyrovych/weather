import React from 'react';
import './City.scss';
import { CityWeatherDetailsDay } from '../../components/cityWeatherDetailsDay';
import {CityBackground} from '../../components/cityBackground'

export class City extends React.Component {
    state = {
        weatherHoursArray: [],
        cityKey: '',
        image: undefined,
        toRenderImg: false,
    }

    weatherRequestHours = () => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.cityKey}&APPID=e5a8a2a8b07305119916d5ccc53716f0&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const weatherHoursArray = response.list.map((datetime) => {
                return {
                    datetime: datetime.dt,
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
            this.setState(() => {
                return {
                    weatherHoursArray: weatherHoursArray,
                    cityKey: this.props.match.params.cityKey,
                    toRenderImg: true,
                }
            })
        })
        .catch((e) => console.log(e));
    }

    getImageRequest = () => {
        const url = `https://api.unsplash.com/search/photos?page=0&query=${this.state.weatherHoursArray[0].cityName}&orientation=landscape&client_id=5b43dc620f6401e0b4532b3d504345c6d46c090da03244346e1b3b9766a3696f`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const image = response.results[0];
            this.setState(() => {
                return {
                    image: image,
                    toRenderImg: false,
                }
            })    

        })
        .catch((e) => console.log(e));
    }
    
    parseDate = (milliseconds) => {
        let fullDate = new Date(milliseconds * 1000);
        let day = fullDate.getDay();
        switch (day) {
            case 1:
                day = 'Пн.'
                break;
            case 2:
                day = 'Вт.'
                break;
            case 3:
                day = 'Ср.'
                break;
            case 4:
                day = 'Чт.'
                break;
            case 5:
                day = 'Пт.'
                break;
            case 6:
                day = 'Сб.'
                break;
            case 0:
                day = 'Вс.'
                break;
        }
        let date = parseInt(fullDate.getDate(), 10);
        date = (date < 10 ? '0' + date.toString(): date);
        let month = parseInt(fullDate.getMonth(), 10) + 1;
        month = (month < 10 ? '0' + month.toString(): month);
        let year = fullDate.getFullYear();
        let hours = parseInt(fullDate.getHours(), 10);
        hours = (hours < 10 ? '0' + hours.toString(): hours);
        let newDate = `${day} ${date}.${month}.${year} ${hours}:00`;
        return newDate;
    }

    parseDeg = (deg) => {
        if ((deg > 337 && deg <= 360) || (deg >= 1 && deg <= 22)) {
            return 'С';
        }
        if (deg > 22 && deg <= 67) {
            return 'СВ';
        }
        if (deg > 67 && deg <= 112) {
            return 'В';
        }
        if (deg > 112 && deg <= 157) {
            return 'ЮВ';
        }
        if (deg > 157 && deg <= 202) {
            return 'Ю';
        }
        if (deg > 202 && deg <= 247) {
            return 'ЮЗ';
        }
        if (deg > 247 && deg <= 292) {
            return 'З';
        }
        if (deg > 292 && deg <= 337) {
            return 'СЗ';
        }
    }

    render() {
        if (this.state.weatherHoursArray.length === 0 || this.state.cityKey !== this.props.match.params.cityKey) {
            this.weatherRequestHours();
            return null;    
        }
        if (this.state.toRenderImg === true) {
            this.getImageRequest();
            return null;
        }
        
        let hoursWeather = null;
        if (this.state.weatherHoursArray.length > 0) {
            hoursWeather = this.state.weatherHoursArray.map((datetime) => {
                return <CityWeatherDetailsDay
                    datetime={this.parseDate(datetime.datetime)}
                    temperature={Math.round(datetime.temperature)}
                    humidity={datetime.humidity}
                    pressure={Math.round(datetime.pressure)}
                    weatherDescription={datetime.weatherDescription}
                    weatherId={datetime.weatherId}
                    windSpeed={datetime.windSpeed}
                    windDeg={this.parseDeg(datetime.windDeg)}
                />
            })
        }
        
        return (
            <div className='weather__city city'>
                <div className='city__city-name'>{this.state.weatherHoursArray[0] === undefined? null: this.state.weatherHoursArray[0].cityName}</div>
                {hoursWeather}
                {this.state.image === undefined? null: <CityBackground url={this.state.image.urls.raw}/>}
            </div>
        )
    }
}