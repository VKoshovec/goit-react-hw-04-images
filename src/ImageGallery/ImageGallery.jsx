import css from './imageGallery.module.scss';
import  PropTypes from 'prop-types';  
import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';



const ApiKey = '33150566-101cf4f5e6186ec2442960e9b';

class ImageGallery extends  Component {

    state = {
       images: [], 
       searchWord: '',
       page: 1,
       status: 'clear'
    };

    componentDidUpdate () {

        const { page, searchWord } = this.state;

        // this.setState(prevState{ status: 'loading' });

        setTimeout(this.setState((prevState, prevProps) => {
            if (this.props.searchWord !== prevState.searchWord) {

                axios.get(`https://pixabay.com/api/?q=${ searchWord }&page=${ page }&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => this.setState({ images: response.data.hits, status: 'loaded' }));
                return { searchWord , status: 'loading' }
            }
        }), 1000);

     
    }

    render () {

        const { images , status } = this.state;

        if (status === 'clear') {
            return ( <div>Input some search word...</div> )
        };

        if (status === 'loading') {
            return ( <Loader/> )
        };

       
        if (status === 'loaded') {
        return ( 
            <ul className={ css.imageGallery }>
               { images.map((element)=> 
               <ImageGalleryItem key = { element.id } url= { element.webformatURL } alt = { 'photo' }/>) }
               <Button />
            </ul>
        )};
    }
};

export default ImageGallery;