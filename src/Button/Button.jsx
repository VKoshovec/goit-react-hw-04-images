import css from './button.module.scss';
import PropTypes from 'prop-types'


const Button = ({ onClick }) => {

    return (
        <button type='button' className={ css.buttonLoadMore } onClick={ onClick }>
            Load more
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button; 