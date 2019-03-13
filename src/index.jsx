import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Weather from './Weather';
import './index.scss';

render(
    <BrowserRouter>
        <Weather />
    </BrowserRouter>,
    document.getElementById('root')
  )


