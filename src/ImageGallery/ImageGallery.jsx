import css from './imageGallery.module.scss';
import  PropTypes from 'prop-types';  
import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';



const ApiKey = '33150566-101cf4f5e6186ec2442960e9b';

class ImageGallery extends  Component {

    state = {
       images: [], 
       status: 'clear'
    };

    componentDidMount () {

       this.setState({ status: 'loading' });

       axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`)
       .then(response => this.setState({ images: response.data.hits, status: 'loaded' }));     
    }

    render () {

        const { images , status } = this.state;

        if (status === 'loading') {
            return ( <Loader/> )
        };

       
        if (status === 'loaded') {
        return ( 
            <ul className={ css.imageGallery }>
               { images.map((element)=> 
               <ImageGalleryItem key = { element.id } url= { element.webformatURL } alt = { 'photo' }/>) }
            </ul>
        )};
    }
};

export default ImageGallery;