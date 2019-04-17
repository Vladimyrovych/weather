import React from 'react';
import './SearchForm.scss';
import SearchInput from '../searchInput/SearchInput';

class SearchForm extends React.Component {
    state = {
        currentValue: '',
    }

    onChange = (currentValue) => {
        this.setState({currentValue: currentValue});
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onClick = (cityName, cityKey) => {//добавление города в избранные и скрытие подсказки
        this.props.onClick(cityName, cityKey);
        this.setState({currentValue: ''});// скрытие подсказки
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

export default SearchForm;