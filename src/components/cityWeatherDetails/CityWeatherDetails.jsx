import React from 'react';
import './CityWeatherDetails.scss';
import { CityWeatherDetailsDay } from './cityWeatherDetailsDay/cityWeatherDetailsDay';

export class CityWeatherDetails extends React.Component {
    render() {
        return (
            <CityWeatherDetailsDay />
        )
    }
}