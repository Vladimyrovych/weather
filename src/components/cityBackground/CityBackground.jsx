import React from 'react';
import './CityBackground.scss';

const CityBackground = ({url}) => {
    const style = {
        backgroundImage: `url(${url})`,
    }

    return <div className='city__background background' style={style}></div>
}

export default CityBackground;