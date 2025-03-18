import { createContext, useCallback, useState } from "react";
import axios from "axios";

// Create a context for managing book-related state and operations
const BooksContext = createContext();

const Provider = ({ children }) => {
  // State to hold the list of books
  const [books, setBooks] = useState([]);

  /**
   * Fetches books from the API and updates the state.
   * Wrapped in `useCallback` to prevent unnecessary re-creation in re-renders.
   */
  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, []);

  /**
   * Creates a new book by sending a POST request to the API.
   * Updates the local state to reflect the newly added book.
   */
  const createBook = async (title) => {
    try {
      const response = await axios.post("http://localhost:3001/books", {
        title,
      });

      // Append the newly created book to the existing list
      setBooks((prevBooks) => [...prevBooks, response.data]);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  /**
   * Updates a book's title by sending a PUT request to the API.
   * Updates the local state with the modified book data.
   */
  const editBookById = async (id, newTitle) => {
    try {
      const res = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });

      // Map through books and update the specific book
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, ...res.data } : book
        )
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  /**
   * Deletes a book by sending a DELETE request to the API.
   * Removes the book from local state.
   */
  const deleteBookById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);

      // Filter out the deleted book and update state
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Object containing all book-related functions and state to be shared across components
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
