import React, { Component } from 'react';
import css from './BookForm.module.css';
export default class BookForm extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    genre: '',
    favorite: false,
    cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
  };



  handleInputChange=(event)=> {
  if(event.target.type === 'checkbox'){
    this.setState({
        [event.target.name]: event.target.checked
    })
    return
  }
    
  this.setState({
    [event.target.name]: event.target.value
   })
}
handleSubmit=event=> {
 event.preventDefault()
 const bookData = {
    title: this.state.title,
    author: this.state.author,
    year: Number.parseInt(this.state.year),
    year: this.state.year,
    genre: this.state.genre,
    cover: this.state.cover,
    
  };
// const bookData = {
//     ...this.state,
//     year: Number.parseInt(this.state.year),
//   };
   this.props.onAddBook(bookData)
   this.setState({
    title: '',
    author: '',
    year: '',
    genre: '',
    favorite: false,
    cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
   })


}

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.styledForm}>
        <h2>BookForm</h2>
        <label htmlFor="" className={css.formLabel}>
          <span>title:</span>
          <input onChange={this.handleInputChange}
          value={this.state.title} type="text" name="title" required/>
        </label>
        <label htmlFor="" className={css.formLabel}>
          <span>author:</span>
          <input onChange={this.handleInputChange} value={this.state.author} type="text" name="author"  required/>
        </label>
        <label htmlFor="" className={css.formLabel}>
          <span>year:</span>
          <input onChange={this.handleInputChange} value={this.state.year} type="text" name="year"  required/>
        </label>
        <label htmlFor="" className={css.formLabel}>
          <span>genre:</span>
          <input onChange={this.handleInputChange} value={this.state.genre} type="text" name="genre"  required/>
        </label>
        <label htmlFor="" className={css.formLabel}>
          <span>favorite:</span>
          <input onChange={this.handleInputChange}
            checked={this.state.favorite}
            type="checkbox"
            name="favorite"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add book
        </button>
      </form>
    );
  }
}
