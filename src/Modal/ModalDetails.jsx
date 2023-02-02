import css from './modal.module.scss';
import PropTypes from 'prop-types';

const ModalDetails = ({ url }) => {
    return(
        <div className= { css.modal }>
            <img src = { url } alt = { url }/>
        </div>
    )
}

ModalDetails.propTypes = {
    url: PropTypes.string.isRequired
}

export default ModalDetails;