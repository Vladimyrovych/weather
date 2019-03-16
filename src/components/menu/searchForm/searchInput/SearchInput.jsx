import React from 'react';
import './SearchInput.scss';

export class SearchInput extends React.Component {
    onChange = (e) => {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        return (
            <input 
                className='search-form__input'
                type="search"
                placeholder={this.props.placeholder}
                value={this.props.currentValue}
                onChange={this.onChange}
            />
        )
    }
}