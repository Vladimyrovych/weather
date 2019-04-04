import React from 'react';
import {CityWeather} from '../../components/cityWeather'
import './Home.scss';

export class Home extends React.Component {
    state = {
        weatherArray: [],
    }

    weatherRequestSeveralCities = (ArrCityKeys) => {
        const url = `https://api.openweathermap.org/data/2.5/group?id=${[...ArrCityKeys]}&APPID=e5a8a2a8b07305119916d5ccc53716f0&units=metric`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const weatherArray = response.list.map((city) => {
                return {
                    cityName: city.name,
                    cityKey: city.id,
                    temperature: city.main.temp,
                    weatherMain: city.weather[0].main,
                    weatherId: city.weather[0].id,
                }
            })
            this.setState({weatherArray: weatherArray});
        })
        .catch((e) => console.log(e));
    }

    render() {
        if (this.state.weatherArray.length === 0) {
            const randomCities = [
                '2643743', //London
                '703448', //Kiev
                '745044', //Istanbul
                '5815135', //Washington
                '6455259', //Paris
                '2950159', //Berlin
                '349340'
            ]
            this.weatherRequestSeveralCities(randomCities);    
        }
        let randomCitiesWeather = null;
        if (this.state.weatherArray.length > 0) {
            randomCitiesWeather = this.state.weatherArray.map((city) => {
                return <CityWeather
                    cityName={city.cityName}
                    temperature={Math.round(city.temperature)}
                    weatherMain={city.weatherMain}
                    weatherId={city.weatherId}
                    cityKey={city.cityKey}
                />
            })
        }

        return (
            <div className='weather__home home'>
                {randomCitiesWeather}
            </div>
        )
    }
}