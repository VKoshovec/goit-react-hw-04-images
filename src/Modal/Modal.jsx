import css from './modal.module.scss';
import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

    render () {
    return ReactDOM.createPortal (
        <div className= { css.overlay } onClick={ this.props.onClick }>  
             <div className= { css.modal }>
             <button className={ css.modalButton }></button>    
                 <img src = { this.props.url } alt = 'photo'/>
             </div>
        </div>, 
        modalRoot
    )}
};

Modal.propTypes = {
    url: PropTypes.string.isRequired
};

export default Modal;