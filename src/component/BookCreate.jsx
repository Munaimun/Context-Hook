import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  // setting the title
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // passing the title to the parent by the prop
  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3 className="add-book-title">Add a book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
