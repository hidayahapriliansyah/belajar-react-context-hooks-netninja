import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BooksContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      { props.children }
    </BooksContext.Provider>
  );
}

export default BookContextProvider;