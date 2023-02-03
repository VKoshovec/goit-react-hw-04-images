import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { SearchWordProvider } from '../src/SearchWordContext';

const App = () => {

    return (
        <SearchWordProvider>
            <Searchbar/> 
            <ImageGallery/>
        </SearchWordProvider>
    )
};

export default App;