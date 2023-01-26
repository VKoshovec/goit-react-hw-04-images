import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ key, url, alt }) => {
    return (
        <li className={ css.imageGalleryItem }>
            <img src= { url}  alt={ alt } className={ css.imageGalleryItemImage }/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    key: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;