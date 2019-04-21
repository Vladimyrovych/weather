import React from 'react';
import CityBackground from '../../components/cityBackground/CityBackground';
import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className='weather__home home'>
                {this.props.randomCitiesWeather}
                {this.props.url === null? null: <CityBackground url={this.props.url}/>}
            </div>
        )
    }
}

export default Home;