import { useEffect } from "react";

import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

import useBooksContext from "./hooks/use-books-context";

import "./index.css";

const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h2 className="title">Reading List</h2>

      <BookList />

      <BookCreate />
    </div>
  );
};

export default App;
