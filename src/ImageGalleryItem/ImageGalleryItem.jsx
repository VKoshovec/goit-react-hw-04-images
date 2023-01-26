import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, alt }) => {
    return (
        <li className={ css.imageGalleryItem }>
            <img src= { url}  alt={ alt } className={ css.imageGalleryItemImage }/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ImageGalleryItem;