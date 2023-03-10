import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {FaDollarSign, FaShoppingCart} from 'react-icons/fa';
import logo from '../images/booksIcon.png';


const Books = ({ showBookList, handleAddBook = f => f }) => {

  // import image into the booklist object 
      const bookList = showBookList;
      console.log(showBookList);

  // Creating the shopping Cart List display
  const bookListResult = bookList.map((book, index) => <a key={index} href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
    <div className="d-flex w-100 justify-content-between" >
          <h5 className="mb-1">{book.category}</h5>
          <img className="bookPhoto" src={book.img} alt={book.img}></img>
          <div style={{ width: '20%' }}>
                  <p className="mb-1" style={{ width: '100%', height:'100px' }}> {book.title}</p>
                  <small>Author: {book.author}</small><br/>
                  <small>Publisher: {book.publisher}</small><br/>
                  <br/>
                  <p><FaDollarSign/> <span>{book.price}</span></p>
          </div>
      
      <button onClick={(event) => handleAddBook(event)} value={index} data-toggle="modal" data-target="#exampleModalCenter" style={{ width: '10%', height:'auto' }}> <FaShoppingCart /></button>
    </div>
  </a>
  );


  return (<div style={{ width: "90%", display: "block", marginLeft: "auto", marginRight: "auto" }}>
             <img src={logo} style={{width:"10%"}}></img> 
             <div className="list-group">
                {bookListResult}
             </div>

          </div>
  );

}
export default Books;
