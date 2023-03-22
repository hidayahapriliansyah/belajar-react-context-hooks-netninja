import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BooksContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('ninja-context-hook');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('ninja-context-hook', JSON.stringify(books));
  });

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      { props.children }
    </BooksContext.Provider>
  );
}

export default BookContextProvider;