import css from './searchbar.module.scss';
import { FaSearch } from 'react-icons/fa';
import { Component } from 'react';

class Searchbar extends Component {

   render () {
       return (
          <header className = {css.searchbar}>
              <form className = {css.searchForm}>
                <button type="submit" className={css.searchFormButton}>
                  <FaSearch size={ 20 } fillOpacity = { 0.8 }/> 
                </button>

                <input
                  className = {css.searchFormInput}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              </form>
          </header>
)} 
};

export default Searchbar