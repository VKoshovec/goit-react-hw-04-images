import css from './searchbar.module.scss';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {

  const hendleSubmit = (e) => {
    e.preventDefault();
    const formValue = e.currentTarget.elements.input.value;
    onSubmit ({ formValue });  
   };

  return (
          <header className = {css.searchbar}>
              <form className = {css.searchForm} onSubmit={ hendleSubmit }>
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
                />
              </form>
          </header>
 )
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar