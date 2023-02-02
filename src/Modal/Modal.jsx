import css from './modal.module.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClick, children }) => {

    const closeModal = ({target, currentTarget, key}) => {
        if (target === currentTarget || key === 'Escape') {
          onClick();
        }
    }

    useEffect (()=>{
         document.addEventListener("keydown", closeModal);
         return ()=> { 
            document.removeEventListener("keydown", closeModal);
         };
    },[]);

     return ReactDOM.createPortal (
        <div className= { css.overlay } onClick={ closeModal }>  
             { children }
        </div>, 
        modalRoot
    )
};

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;