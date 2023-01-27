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
       page: 1,
       searchWord: '',
       status: 'clear',
       errMessage: ''
    };

    // getImages ( searchWord, page ) {

    //     this.setState ({ status: 'loading'});

    //     axios.get(`https://pixabay.com/api/?q=${ searchWord }&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12 * page }`)
    //     .then(response => this.setState({ images: response.data.hits, status: 'loaded' }))
    //     .catch ( err => this.setState({status: 'err'}));
           
    // };

    componentDidUpdate (prevProps, prevState) {

        console.log(prevProps.searchWord);
        console.log(this.props.searchWord);
    
         if (this.props.searchWord !== prevProps.searchWord) {
            console.log('ok')
            this.setState ({ status: 'loading'});
            axios.get(`https://pixabay.com/api/?q=${this.props.searchWord}&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12 }`)
           .then( response => this.setState({ images: response.data.hits, status: 'loaded' }));
         }

        // console.log (this.state.images.length +''+ prevState.images.length)
        //  axios.get(`https://pixabay.com/api/?q=${''}&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12 }`)
        // .then( response => this.setState({ images: response.data.hits, status: 'loaded' }));
        // };

        // this.setState ({ searchWord: this.props.searchWord });
        // const oldSearch = prevProps.searchWord;
        // const newSearch = this.props.searchWord;

        // if ( oldSearch !== newSearch ) {
        //     console.log ('NewSearch');
        //     axios.get(`https://pixabay.com/api/?q=${ newSearch }&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12  }`)
        //     .then(response => this.setState({ images: response.data.hits, status: 'loaded' }))
        // }
    }


    // loadMoreClick = () => {
    //     this.setState((prevState) => { return { page: prevState.page + 1 } })
    //     console.log(this.state);
    // }

    render () {

        const { images , status } = this.state;

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
            <ul className={ css.imageGallery }>
               { images.map((element)=> 
               <ImageGalleryItem key = { element.id } url= { element.webformatURL } alt = { 'photo' }/>) }
               <Button onClick={ this.loadMoreClick }/>
            </ul>
        )};

        // return ( 
        //     <ul className={ css.imageGallery }>

        //        { images.map((element)=> 
        //        <ImageGalleryItem key = { element.id } url= { element.webformatURL } alt = { 'photo' }/>
        //        )}

        //        {/* <Button onClick={ this.loadMoreClick }/> */}
        //     </ul>
        // )
    }
};

export default ImageGallery;