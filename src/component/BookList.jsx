import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBook = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="list">{renderedBook}</div>;
};

export default BookList;
