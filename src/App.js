import { Component } from "react";
import css from './index.scss'
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

class App extends Component {
    render () {
       return (
        <>  
         <Searchbar /> 
         <ImageGallery />
        </>
    )};
};

export default App;
