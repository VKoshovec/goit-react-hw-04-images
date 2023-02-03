import { createContext, useContext, useState } from "react";

const SearchWord = createContext('');

export const useSearchWord = () => useContext(SearchWord);

export const SearchWordProvider = ({ children }) => {

  const [searchWord, setSearchWord] = useState('');

  const sethWord = (word) => {
    setSearchWord(word);
  };

  return (
    <SearchWord.Provider value={{ searchWord, sethWord }}>
       {children}
    </SearchWord.Provider>
  );
};