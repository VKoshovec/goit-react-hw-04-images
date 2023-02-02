import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ImageGalleryItem = ({ url, largeImage, onClick }) => {
    
    const [largeImageState, setLargeImageState] = useState ('');

    const clickItem = () => {
        onClick({largeImageState});
    }

    useEffect (() => {setLargeImageState (largeImage)} , [largeImage]);

    return (
        <li onClick={ clickItem } className={ css.imageGalleryItem }>
            <img src= { url } alt={ url }className={ css.imageGalleryItemImage }/>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ImageGalleryItem;