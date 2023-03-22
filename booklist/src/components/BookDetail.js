import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BookContext';

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BooksContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetail;