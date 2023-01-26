import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";

import Modal from "./Modal/Modal";

class App extends Component {
    render () {
       return (
        <>  
         <Searchbar/> 
         <ImageGallery/>
         <Button/>
         {/* <Loader/> */}
         {/* <Modal/> */}
        </>
    )};
};

export default App;
