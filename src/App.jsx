import { useContext, useEffect } from "react";

import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

import BooksContext from "./context/books";

import "./index.css";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h2 className="title">Reading List</h2>

      <BookList />

      <BookCreate />
    </div>
  );
};

export default App;
