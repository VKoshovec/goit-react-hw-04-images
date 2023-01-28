import css from './imageGalleryItem.module.scss';
import PropTypes from 'prop-types';
import { Component } from 'react';

class ImageGalleryItem extends Component {

    state = {
        largeImage: '',
    }

    clickItem = () => {
        const bigImg = this.state.largeImage;
        this.props.onClick({bigImg});
    }

    componentDidMount () {
        this.setState({ largeImage: this.props.largeImage });
    }

    render() {

    return (
        <li onClick={ this.clickItem } className={ css.imageGalleryItem }>
            <img src= { this.props.url } alt='image' className={ css.imageGalleryItemImage }/>
        </li>
    )};
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ImageGalleryItem;