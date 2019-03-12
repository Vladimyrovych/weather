import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Weather from './Weather';
import {Details} from './components/Details';
import './index.scss';

render(
    <BrowserRouter>
        <div>
            <Route path='/' component={Weather} />
            <Route path='/details' component={Details} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
  )


