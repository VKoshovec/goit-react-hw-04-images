import css from './imageGallery.module.scss';
import  PropTypes from 'prop-types';  

const ImageGallery = ({ children }) => {

    return (
        <ul className={ css.imageGallery }>
           {children}
        </ul>
    );
};

ImageGallery.propTypes = {
    children: PropTypes.any,
}

export default ImageGallery;