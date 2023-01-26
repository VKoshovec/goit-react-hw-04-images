import css from './modal.module.scss';
import PropTypes from 'prop-types';

const Modal = ({ url, alt }) => {
    return (
        <div className= { css.overlay }>
             <div className= { css.modal }>
                 <img src = { url } alt = { alt } />
             </div>
        </div>
    )
};

Modal.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Modal;