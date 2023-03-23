import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have { books.length } books to get through ... </p>
    </div>
  );
}

export default Navbar;