function Book({ book }) {
  return (
    <div className='w-full'>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>
        <a href='#' className='font-extrabold'>
          X
        </a>
      </td>
    </div>
  );
}

export default Book;
