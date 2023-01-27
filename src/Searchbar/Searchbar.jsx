import css from './searchbar.module.scss';
import { FaSearch } from 'react-icons/fa';
import { Component } from 'react';

class Searchbar extends Component {


   hendleSubmit = (e) => {
    e.preventDefault();
    const formValue = e.currentTarget.elements.input.value;
    this.props.onSubmit ({ formValue });  
   }

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

export default Searchbar