import React from 'react';
import './CityWeatherDetailsDay.scss'

export class CityWeatherDetailsDay extends React.Component {
    render() {
        return (
            <div className=''>
                <div className=''>25.03.20019</div>
                <img src=""/>
                <div className=''>temp</div>
                <div className=''>temp_min</div>
                <div className=''>temp_max</div>
                <div className=''>pressure</div>
                <div className=''>sea_level</div>
                <div className=''>grnd_level</div>
                <div className=''>humidity</div>
                <div className=''>overcast clouds</div>
                <div className=''>wind</div>
                <div className=''>rain</div>
                <div className=''>snow</div>
            </div>
        )
    }
}