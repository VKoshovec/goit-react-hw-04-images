import css from './button.module.scss';

const Button = () => {
    return (
        <button type='button' className={ css.buttonLoadMore }>
            Load more
        </button>
    )
};

export default Button; 