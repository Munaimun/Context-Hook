import { useState } from "react";

import BookEdit from "./BookEdit";

import useBooksContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDelete = () => {
    deleteBookById(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />

      {showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : book.title}

      <div className="actions">
        <button className="btn" onClick={handleEdit}>
          edit
        </button>

        <button className="btn" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default BookShow;
