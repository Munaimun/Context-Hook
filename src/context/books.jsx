import { createContext, useState } from "react";

import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title, // title is identical, thats why we didn't write title: title
    });

    const updatedBook = [
      ...books,
      response.data, // <- adding the new book at the end
    ];

    setBooks(updatedBook);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBook = books.map((book) => {
      if (book.id === id) return { ...book, ...res.data }; // taking all the new properties and val from res and update the book

      return book;
    });
    setBooks(updatedBook);
  };

  // function to delete the book
  const deleteBookById = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`);

    const updateBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBook);
  };

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    createBook,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};
export { Provider };
export default BooksContext;
