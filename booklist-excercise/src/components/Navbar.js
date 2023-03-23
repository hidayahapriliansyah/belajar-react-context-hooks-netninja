import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>NetNinja Exercise Hooks and Context</h1>
      <p>Currenntly have {books.length} to get through ...</p>
    </div>
  )
}

export default Navbar;