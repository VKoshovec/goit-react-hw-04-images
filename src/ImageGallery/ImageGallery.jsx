import css from './imageGallery.module.scss';
import  PropTypes from 'prop-types';  
import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ApiKey = '33150566-101cf4f5e6186ec2442960e9b';

class ImageGallery extends  Component {

    state = {
       images: [], 
       page: 1,
       searchWord: '',
       status: 'clear',
       results: 0,
       showModal: false,
       largeImage: ''
    };


    async getImages ( serarchWord, searchPage) {
       const result = await axios.get(`https://pixabay.com/api/?q=${ serarchWord }&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12 * searchPage }`);
       return result;
    }

    componentDidUpdate (prevProps, prevState) {

        const prevSearchWord =  prevProps.searchWord;
        const currentSearchWord = this.props.searchWord;
        const prevPage = prevState.page;
        const curPage = this.state.page;
    
         if (currentSearchWord !== prevSearchWord) {

            this.setState ({ status: 'loading', page: 1});
            
            this.getImages ( currentSearchWord, 1)
            .then( response => { 
                const { hits, total } = response.data;
                this.setState({ images: hits, results: total }) 
            } )
            .catch(() => { this.setState({ status: 'err' }) })
            .finally(() => this.setState({ status: 'loaded' }));
         }

         if (curPage !== prevPage ) {
   
            this.getImages ( currentSearchWord, curPage)
            .then( response => { 
                this.setState({ images: response.data.hits }) 
            })
            .catch(() => { this.setState({ status: 'err' }) })
            .finally(() => this.setState({ status: 'loaded' }))
         }

    }


    loadMoreClick = () => {
        this.setState((prevState) => { return { page: prevState.page + 1 } })
    }

    showModal = (e) => {
        this.setState({ showModal: true, largeImage: e.target.srcset })
    }

    closeModal = (e) => {
        this.setState ({ showModal: false, largeImage: '' })
    }
 
    render () {

        const { images , status,  results, showModal, largeImage } = this.state;

        if (status === 'clear') {
            return ( <div>Input some search word...</div> )
        };

        if (status === 'loading') {
            return ( <Loader/> )
        };

        if (status === 'err') {
            return ( <div>Some problems with Api!</div> )
        };

        if (status === 'loaded') {
        return ( 
            <>
                {showModal && <Modal url={ largeImage } onClick ={ this.closeModal }/> }
                <ul className={ css.imageGallery }>
                   { images.map((element)=> 
                   <ImageGalleryItem key = { element.id } url= { element.webformatURL } srcSet = { element.largeImageURL } onClick={ this.showModal }/>) }            
                </ul>
                {results > images.length && <Button onClick={ this.loadMoreClick }/>}
            </>
        )};
    }
};

export default ImageGallery;