import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ url, srcSet, onClick  }) => {

    return (
        <li onClick={ onClick } className={ css.imageGalleryItem }>
            <img src= { url } srcSet={ srcSet } alt='image' className={ css.imageGalleryItemImage }/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ImageGalleryItem;