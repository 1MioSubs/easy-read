import React from "react";

function Library() {
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
    { id: 4, title: 'Book 4' },
    { id: 5, title: 'Book 5' },
    { id: 6, title: 'Book 6' },
  ];

  return (
    <div>
      <h2>Library</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`/books/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Library;
