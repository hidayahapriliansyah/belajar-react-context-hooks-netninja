import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
  const { books } = useContext(BooksContext);
  return books.length
  ? <div className="book-list">
    <ul>
      {
        books.map((book) => 
        <BookDetail book={ book } key={ book.id } />
        )
      }
    </ul>
  </div>
  : <div className="empty">
    No books to read. Hello free time :)
  </div>
  ;
}

export default BookList;
