import React from 'react';
import './CityBackground.scss';

export class CityBackground extends React.Component {
    state = {
        cityName: '',
        image: {},
    }

    getImageRequest = () => {
        const url = `https://api.unsplash.com/search/photos?page=0&query=${this.props.cityName}&client_id=5b43dc620f6401e0b4532b3d504345c6d46c090da03244346e1b3b9766a3696f`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const image = response.results[0];
            console.log('finish req');
            // this.setState({
            //     image: image,
            //     cityName: this.props.cityName,
            // });
            this.setState(state => {
                return state = {
                    image: image,
                    cityName: this.props.cityName,
                }
            })
            console.log('finish req 2');
            
        })
        .catch((e) => console.log(e));
    }

    render() {
        console.log('cityBack ' + this.state.cityName);
        console.log('cityBack ' + this.props.cityName);
        if (this.state.cityName !== this.props.cityName) {
            console.log('cityBack req');
            this.getImageRequest();
            return null;
        }
        return (
            <div className='city__background background'>
                <img className='background__image' src={this.state.image.urls.raw}/>
            </div>
        )
    }
}