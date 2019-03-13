import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from '../home/Home';
import {City} from '../city/City';

export class Main extends React.Component {
    render() {
        return (
            <main className='weather__main'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/city' component={City}/>
                </Switch>
            </main>
        )
    }
}