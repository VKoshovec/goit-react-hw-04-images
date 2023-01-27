import css from './button.module.scss';

const Button = ({ onClick }) => {

    return (
        <button type='button' className={ css.buttonLoadMore } onClick={ onClick }>
            Load more
        </button>
    )
};

export default Button; 