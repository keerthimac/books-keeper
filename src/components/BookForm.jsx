import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const setIsbnHandler = (event) => {
    setIsbn(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      isbn,
    };
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div className='py-10 px-10'>
      <h1 className='text-xl'>Add Book</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={title}
            className='w-full border-2'
            onChange={setTitleHandler}
          />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            value={author}
            className='w-full border-2'
            onChange={setAuthorHandler}
          />
        </div>
        <div>
          <label htmlFor='isbn'>ISBN#</label>
          <input
            type='text'
            value={isbn}
            className='w-full border-2'
            onChange={setIsbnHandler}
          />
        </div>
        <div>
          <input
            type='submit'
            value='submit'
            className='w-full border-2 mt-3'
          />
        </div>
      </form>
    </div>
  );
}

export default BookForm;
