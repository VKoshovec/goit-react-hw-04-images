import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";


class App extends Component {

    state = {
      searchWord: '',
    };
   
    hendleSearch = (res) => {
        this.setState ({searchWord: res.formValue });
    };

    render () {
       return (
        <>  
         <Searchbar onSubmit = {(res) => this.hendleSearch(res)}/> 
         { this.state.searchWord? <ImageGallery searchWord = { this.state.searchWord } />:"" }
         {/* {<Button/>} */}
         {/* <Loader/> */}
         {/* <Modal/> */}
        </>
    )};
};

export default App;
