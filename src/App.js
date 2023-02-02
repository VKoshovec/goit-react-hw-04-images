import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

const App = () => {

    const [searchWord, setSearchWord] = useState('');

       return (
        <>  
         <Searchbar onSubmit = {(res) => setSearchWord(res.formValue)}/> 
         <ImageGallery queryhWord = { searchWord } />
        </>
    )
};

export default App;
