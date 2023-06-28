import BookForm from './BookForm/BookForm';
import React, { Component } from 'react';
import booksData from '../books.json';

const books = booksData.books;
console.log(books);
export class App extends Component {
  state = {
    books: books,
  };

  onRemoveBook = bookId => {
    // батчинг
    // this.setState({books: this.state.books.filter(book => book.id !== bookId)})
    // если нужно удалить все можно передать пустой массив:
    // this.setState({books: []})

    // тоже самое др способом универсвльный способ
    this.setState(state => ({
      books: state.books.filter(book => book.id !== bookId),
    }));
  };

 onAddBook=(bookData)=> {
  console.log(bookData)

  const finalBook = {
    ...bookData,
    id: (Math.random() * 10).toString(),
  };

  this.setState({
    books: [finalBook, ...this.state.books],
  });
 }

  render() {
    return (
      <div>
        <BookForm onAddBook={this.onAddBook}/>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              {book.title}
              <button onClick={() => this.onRemoveBook(book.id)}>
                &times;
              </button>
              <h3>Title: {book.title}</h3>
              <h4>Author: {book.author}</h4>
              <p>Year: {book.year}</p>
              <p>Genre: {book.genre}</p>
              <p>Favourite: {book.favourite ? '❤' : '-'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// https://github.com/Maxim4ik118/fson-78/blob/main/src/components/BookForm/BookForm.jsx