import React, { useState, useEffect } from "react";
import "./LibraryExperiment.css";

function LibraryExperiment() {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    if (!title || !author) return;
    setBooks([...books, { title, author }]);
    setTitle("");
    setAuthor("");
  };

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container">
      <h1>Library Management System</h1>

      <input
        type="text"
        placeholder="Search books..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleAdd}>Add Book</button>
      </div>

      {filteredBooks.map((book, index) => (
        <div className="book-card" key={index}>
          <div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => handleDelete(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default LibraryExperiment;
