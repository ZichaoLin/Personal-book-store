import './App.css';
import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import axios from'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Books from './components/books';
import Carts from './components/carts';
import Locations from './components/locations';
import NavBar from './components/navBar';
import Login from './components/login/login';
import Register from "./components/register/register";
import Admin from "./components/admin/admin";
import EditBooks from "./components/admin/editBooks";
import { sum } from 'lodash';
function App() {


  const [bookList, setBookList] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [allTotal, setAllTotal] = useState(0);

  useEffect(() => {
    //get request
    const url = `http://localhost:5000/api/bookinfo`;
    axios
      .get(url)
      .then((res) => {
        console.log("from Database," , res.data);
        setBookList(res.data);
      })
      .catch((err) => console.log("ERROR: ", err));
  }, []);


  // for <books> handle add a book to Cart
  const handleAddBook = (event) => {
    const list = bookList
    list[event.target.value].qty= sum([list[event.target.value].qty,1]);
    const selectedList = list.filter(book => book.qty > 0);
    setShoppingCart(selectedList);
    var total=0;
    for (let i=0; i<selectedList.length; i++)
     {total = total+ (selectedList[i].price*selectedList[i].qty)}
    setAllTotal(total);
    selectedList='';
  }

  // for <Carts> update the qty Change
  const changeQty = (event, index) => {
    const cart = shoppingCart;
    cart[index].qty = parseInt(event.target.value);
    const selectedList = cart.filter(book => book.qty > 0);
    setShoppingCart(selectedList);
    var total=0;
    for (let i=0; i<cart.length; i++)
     {total = total+ (cart[i].price*cart[i].qty)}
    setAllTotal(total);
    selectedList='';
  }

  // for <Carts> update to drop item
  const dropCartItem = (event, index) =>{
    const cart = shoppingCart;
    cart[index].qty = 0;
    const selectedList = cart.filter(book => book.qty > 0);
    setShoppingCart(selectedList);
    var total=0;
    for (let i=0; i<cart.length; i++)
     {total = total+ (cart[i].price*cart[i].qty)}
    setAllTotal(total);
    selectedList='';
  }

// for <editBooks> to handle delete a book

//below code that update without database, can be ignore now
/*const handleDelete = (event, index) =>{
  const list = bookList;
  const selectedList = list.filter(book => book.title!=list[index].title);
  setBookList(selectedList);
  selectedList='';
}*/

const handleDelete = async (id) => {
  //delete request
  const url = `http://localhost:5000/api/bookinfo/${id}`;
  const { data } = await axios.delete(url);
  console.log(data);
  const newbooks = bookList.filter((book) => book._id !== id);
  setBookList(newbooks);
};


// for <editBooks> to handle add a book

//below code that update without database, can be ignore now
/* const addBooklist= ({title,author,publisher,category,price,img})=>{
  const newBook = {title, author, publisher, category, price, img, qty:0};
      const list = bookList; 
      const selectedList = list.concat(newBook);
      setBookList(selectedList);
    }
*/
    const addBooklist = async ({title,author,publisher,category,price,img}) => {
      //add or post request
      const url = `http://localhost:5000/api/bookinfo`;
      const {data} = await axios.post(url, {
        title,author,publisher,category,price,img
      });
      const newbooks = [...bookList,data];
      setBookList(newbooks)
    };
  


// for <editBooks> to handle edit function

/*

const saveEdit=({editTitle,editAuthor,editCategory, editImg, editPrice, editPublisher, targetIndex})=>{
  const editBook = {title:editTitle, author:editAuthor, 
                    category:editCategory, 
                    publisher:editPublisher, 
                    price:editPrice, img:editImg, qty:0};
  const list = bookList;
  list[targetIndex]=editBook 
  const selectedList = [... list];
  setBookList(selectedList);
 }
*/

 const saveEdit= async ({editTitle,editAuthor,editCategory, editImg, editPrice, editPublisher, targetIndex})=>{
  //add or post request
  const _id = bookList[targetIndex]._id;
  const title=editTitle;
  const author=editAuthor;
  const publisher=editPublisher 
  const category=editCategory; 
  const price=editPrice;
  const img = editImg;
  console.log("going to edit ", _id, title,author,publisher, category, price, img);
  const url = `http://localhost:5000/api/bookinfo/update/${_id}`;
  const {data} = await axios.post(url, {
    title,author,publisher, category, price, img
  });
  console.log(data);
  const editBook = {title:editTitle, author:editAuthor, 
    category:editCategory, 
    publisher:editPublisher, 
    price:editPrice, img:editImg, qty:0};
  const list = bookList;
  list[targetIndex]=editBook 
  const selectedList = [... list];
  setBookList(selectedList);
};


  return (
    <div className="App" >
      {<>

        <Header></Header>
        <NavBar />
        <Routes>
          <Route path="/login" element={<><Login /></>} />
          <Route path="/register" element={<><Register /></>} />
          <Route path="/" element={<><Home showBookList={bookList} /></>} />
          <Route path="/books" element={<><Books
            showBookList={bookList}
            handleAddBook={handleAddBook}
          /></>} />
          <Route path="/carts" element={<><Carts
            shoppingCart={shoppingCart}
            changeQty={changeQty}
            allTotal={allTotal}
            dropCartItem={dropCartItem}
          /></>} />
          <Route path="/locations" element={<><Locations /></>} />
          <Route path="/Home" element={<><Home showBookList={bookList} /></>} />
          <Route path="/admin" element={<><Admin /></>} />
          <Route path="/editBooks" element={<><EditBooks showBookList={bookList} 
                                                          handleDelete={handleDelete}
                                                          addBooklist={addBooklist}
                                                          saveEdit={saveEdit}
                                                            /></>} />

        </Routes>
        <Footer></Footer>
      </>}
    </div>);

}

export default App;
