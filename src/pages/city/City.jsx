import React from 'react';
import './City.scss';
import { CityWeatherDetails } from '../../components/cityWeatherDetails/CityWeatherDetails';

export class City extends React.Component {
    render() {
        return (
            <div className=''>
                <CityWeatherDetails cityKey={this.props.match.params.cityKey}/>
            </div>
        )
    }
}