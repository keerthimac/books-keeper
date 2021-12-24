import { useState } from "react";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className='container text-center'>
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
