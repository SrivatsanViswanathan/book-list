const Book = (book) => {
  return (
    <article className='book'>
      <a href={book.link} target='_blank' rel='noreferrer'>
        <img src={book.img} alt={book.title}></img>
      </a>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <span className='number'>{`#${book.number + 1}`}</span>
    </article>
  );
};

export default Book;
