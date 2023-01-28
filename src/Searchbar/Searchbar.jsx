import css from './searchbar.module.scss';
import { FaSearch } from 'react-icons/fa';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {

   hendleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formValue = e.currentTarget.elements.input.value;
    this.props.onSubmit ({ formValue });  
    form.reset();
   };

   render () {
       return (
          <header className = {css.searchbar}>
              <form className = {css.searchForm} onSubmit={ this.hendleSubmit }>
                <button type="submit" className={css.searchFormButton}>
                  <FaSearch size={ 20 } fillOpacity = { 0.8 }/> 
                </button>

                <input
                  className = {css.searchFormInput}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  name='input'
                  value={ this.props.searchResult }
                />
              </form>
          </header>
)} 
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchResult: PropTypes.string,
}

export default Searchbar