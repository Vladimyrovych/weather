import React from 'react';
import './CityWeatherDetailsDay.scss';
import cloud from '../../utilities/assets/cloudy.png';
import fog from '../../utilities/assets/foggy.png';
import rain from '../../utilities/assets/rainfall.png';
import snow from '../../utilities/assets/snow.png';
import storm from '../../utilities/assets/storm.png';
import sun from '../../utilities/assets/sun.png';


// export class CityWeatherDetailsDay extends React.Component {
//     getWeatherIcon = () => {
//         if (weatherId >= 200 && weatherId < 300) {
//             return storm;
//         }
//         if (weatherId >= 300 && weatherId < 500) {
//             return rain;
//         }
//         if (weatherId >= 500 && weatherId < 600) {
//             return rain;
//         }
//         if (weatherId >= 600 && weatherId < 700) {
//             return snow;
//         }
//         if (weatherId >= 700 && weatherId < 800) {
//             return fog;
//         }
//         if (weatherId === 800) {
//             return sun;
//         }
//         if (weatherId >= 801 && weatherId < 900) {
//             return cloud;
//         }
//     }

//     render() {
//         return (
//             <div className='city__weather-data weather-data'>
//                 <div className='weather-data__datetime'>{datetime}</div>
//                 <div className='weather-data__icon-block'>
//                     <img className='weather-data__icon' src={this.getWeatherIcon()}/>
//                 </div>
//                 <div className='weather-data__temperature temperature'>
//                     <div className='temperature__name'>Темп.</div>
//                     <div className='temperature__value'>{temperature}°C</div>
//                 </div>
//                 <div className='weather-data__wind-speed wind-speed'>
//                     <div className='wind-speed__name'>Скор. вет.</div>
//                     <div className='wind-speed__value'>{windSpeed}м/с</div>
//                 </div>
//                 <div className='weather-data__wind-deg wind-deg'>
//                     <div className='wind-deg__name'>Напр. вет.</div>
//                     <div className='wind-deg__value'>{windDeg}</div>
//                 </div>
//                 <div className='weather-data__humidity humidity'>
//                     <div className='humidity__name'>Влажн.</div>
//                     <div className='humidity__value'>{humidity}%</div>
//                 </div>
//                 <div className='weather-data__pressure pressure'>
//                     <div className='pressure__name'>Давл.</div>
//                     <div className='pressure__value'>{pressure}гПа</div>
//                 </div>
//                 <div className='weather-data__description description'>
//                     <div className='description__name'>Погода</div>
//                     <div className='description__value'>{weatherDescription}</div>
//                 </div>
//             </div>
//         )
//     }
// }

const CityWeatherDetailsDay = ({datetime, temperature, windSpeed, windDeg, humidity, pressure, weatherDescription, weatherId}) => {
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
        <div className='city__weather-data weather-data'>
            <div className='weather-data__datetime'>{datetime}</div>
            <div className='weather-data__icon-block'>
                <img className='weather-data__icon' src={getWeatherIcon()}/>
            </div>
            <div className='weather-data__temperature temperature'>
                <div className='temperature__name'>Темп.</div>
                <div className='temperature__value'>{temperature}°C</div>
            </div>
            <div className='weather-data__wind-speed wind-speed'>
                <div className='wind-speed__name'>Скор. вет.</div>
                <div className='wind-speed__value'>{windSpeed}м/с</div>
            </div>
            <div className='weather-data__wind-deg wind-deg'>
                <div className='wind-deg__name'>Напр. вет.</div>
                <div className='wind-deg__value'>{windDeg}</div>
            </div>
            <div className='weather-data__humidity humidity'>
                <div className='humidity__name'>Влажн.</div>
                <div className='humidity__value'>{humidity}%</div>
            </div>
            <div className='weather-data__pressure pressure'>
                <div className='pressure__name'>Давл.</div>
                <div className='pressure__value'>{pressure}гПа</div>
            </div>
            <div className='weather-data__description description'>
                <div className='description__name'>Погода</div>
                <div className='description__value'>{weatherDescription}</div>
            </div>
        </div>
    )
}

export default CityWeatherDetailsDay;