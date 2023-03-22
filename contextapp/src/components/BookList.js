import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { books } = useContext(BookContext);
  return (
    <div className="book-list" style={{  background: theme.bg, color: theme.syntax }}>
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}>{book.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default BookList;
