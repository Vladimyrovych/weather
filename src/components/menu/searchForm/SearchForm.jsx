import React from 'react';
import './SearchForm.scss';
import { SearchInput } from './searchInput';

export class SearchForm extends React.Component {
    state = {
        currentValue: '',
    }

    onChange = (currentValue) => {
        this.setState({currentValue: currentValue})
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onClick = (cityName, cityKey) => {
        this.props.onClick(cityName, cityKey);
    }

    render() {
        return (
            <form className='menu__search search-form' onSubmit={this.onSubmit}>
                <SearchInput 
                    placeholder={this.props.placeholder} 
                    currentValue={this.state.currentValue}
                    onChange={this.onChange}
                    onClick={this.onClick}
                />
            </form>
        )
    }
}