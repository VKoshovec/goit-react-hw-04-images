import css from './imageGallery.module.scss';
import  PropTypes from 'prop-types';  
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ModalDetails from '../Modal/ModalDetails';

const ApiKey = '33150566-101cf4f5e6186ec2442960e9b';

const ImageGallery = ({ queryhWord }) => {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('clear');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(0);
    const [shownModal, setShownModal] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const [largeImage, setLargeImage] = useState('');

    async function getImages ( serarchWord, searchPage) {
       const result = await axios.get(`https://pixabay.com/api/?q=${ serarchWord }&page=1&key=${ ApiKey }&image_type=photo&orientation=horizontal&per_page=${ 12 * searchPage }`);
       return result;
    }

    useEffect (()=>{

        if (queryhWord !=="") {

        setLoading (true);
        getImages ( queryhWord, page)
            .then( response => { 
                const { hits, total } = response.data;
                setImages(hits)
                setResults(total)
            })
            .catch(() => { setErrMessage('Some problems with API!') })
            .finally(() => {
                            setStatus('loaded') 
                            setLoading (false)
            })};

    }, [queryhWord, page]);
    
    const loadMoreClick = () => {
        setPage((prevPage) => prevPage + 1 );
    }

    const showModal = (largeImg) => {
        setShownModal(true);
        setLargeImage(largeImg.largeImageState);
    }

    const closeModal = () => {
        setShownModal(false);
        setLargeImage('');
    }

    if (status === 'clear') {
        return ( <div>Input some search word...</div> )
    }

    else if (status === 'loaded') {
        return (
        <>
            {shownModal && 
               <Modal onClick ={ closeModal }>
               <ModalDetails url={ largeImage } />
                </Modal> 
            }
            <ul className={ css.imageGallery }>
                { images.map((element)=> 
                <ImageGalleryItem key = { element.id } url= { element.webformatURL } largeImage = { element.largeImageURL } onClick={ largeimg => showModal(largeimg) }/>) }            
            </ul>
            {loading &&  <Loader/>}
            {errMessage &&  <div>{ errMessage }</div>}
            {results > images.length && <Button onClick={ loadMoreClick }/>}
        </>
    )
    };
}

ImageGallery.propTypes = {
    queryhWord: PropTypes.string.isRequired
}

export default ImageGallery;