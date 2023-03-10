import { useState } from 'react';
import {FaEdit, FaTrash, } from 'react-icons/fa';

const EditBooks = ({ showBookList , addBooklist=f=>f(), handleDelete=f=>f(), saveEdit=f=>f()}) => {
//    const [bookList,setBookList] = useState(showBookList);
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [publisher, setPublisher]=useState("");
    const [category, setCategory]=useState("");
    const [price, setPrice]=useState("");
    const [img, setImg]=useState("");
    
    const[isEdit, setIsEdit] = useState(false);
    const [editTitle, setEditTitle]=useState('');
    const [editAuthor, setEditAuthor]=useState("");
    const [editPublisher, setEditPublisher]=useState("");
    const [editCategory, setEditCategory]=useState("");
    const [editPrice, setEditPrice]=useState('');
    const [editImg, setEditImg]=useState("");
    const [targetIndex, setTargetIndex]=useState('')
    
    const add=(event)=>{
        event.preventDefault();
        addBooklist({title,author,publisher,category,price,img})
        setTitle("");
        setAuthor("");
        setPublisher("");
        setCategory("");
        setPrice("");
        setImg("");
    }
    
    if (!isEdit){  var editBox="";  }
    else 
    {
        editBox =<tr>
        <td colSpan="2"> <button type="submit" onClick={(event)=>save(event)}>Save Edit</button> </td>
        <td>{targetIndex}</td>
        <td >  <input type="text" id='title' value={editTitle}
                        onChange={(event)=>setEditTitle(event.target.value)}    /></td>
        <td >  <input type="text" id='author' value={editAuthor}
                        onChange={(event)=>setEditAuthor(event.target.value)}   /></td>
        <td >  <input type="text" id='publisher' value ={editPublisher}
                        onChange={(event)=>setEditPublisher(event.target.value)} /></td>
        <td >  <input type="text" id='category' value = {editCategory}
                    onChange={(event)=>setEditCategory(event.target.value)}     /></td>
        <td >  <input type="number" id='price' value ={editPrice}
                        onChange={(event)=>setEditPrice(event.target.value)}    /></td>
        <td >  <input type="text" id='img' value={editImg}
                        onChange={(event)=>setEditImg(event.target.value)}      /></td>
    </tr>;
    }

    
    const edit= (e,index)=>{
        e.preventDefault();
        console.log(index)
        setTargetIndex(index);
        setEditTitle(showBookList[index].title);
        setEditAuthor(showBookList[index].author);
        setEditPublisher(showBookList[index].publisher);
        setEditCategory(showBookList[index].category);
        setEditPrice(showBookList[index].price);
        setEditImg(showBookList[index].img);
        setIsEdit(true);    
    }

    const save = (event) =>{
        console.log("hello")
        saveEdit({editTitle,editAuthor,editCategory, editImg, editPrice, editPublisher, targetIndex});
        setIsEdit(false);
        editBox=""
        setTargetIndex();
        setEditTitle();
        setEditAuthor();
        setEditPublisher();
        setEditCategory();
        setEditPrice();
        setEditImg();
        setIsEdit(false);    
    }

    return(
        <div className='section'>
        <FaEdit style={{ height: '4em', width: 'auto', color:'green'}}/>  
         <table className="table table-bordered" style={{width:"100%"}}>
                <thead>
                <tr>
                    <th >Edit</th>
                    <th >Delete</th>
                    <th >#</th>
                    <th >Title</th>
                    <th >Author</th>
                    <th >Publisher</th>
                    <th >Category</th>
                    <th >Price</th>
                    <th >Image Source</th>
                   
                </tr>
                </thead>
                <tbody>
                {editBox}


                {showBookList.map( (book,index)=><tr>
                    <td> <FaEdit onClick={(event=> edit(event,index))}/> </td>
                    <td> <FaTrash onClick={(event=>handleDelete(book._id)) } value={index} /> </td>
                    <td>{index}</td>
                    <td >{book.title}</td>
                    <td >{book.author}</td>
                    <td >{book.publisher}</td>
                    <td >{book.category}</td>
                    <td >{book.price}</td>
                    <td >{book.img}</td>
                </tr> )}
                </tbody>
            </table>
            <form >
                    
                
                  <div className="form-group">
                      <label htmlFor="title">Title
                      <input 
                                className="form-control"
                                 id="title"
                                type="text" 
                                defaultValue={title}
                                onChange={(event)=>setTitle(event.target.value)}
                                />
                                </label>
                                 </div>

                                 <div className="form-group"> 
                                 <label htmlFor="author">Author   
                                 <input 
                                  className="form-control"
                                type="text" 
                                defaultValue={author}
                                id='author' 
                                onChange={(event)=>setAuthor(event.target.value)}
                                />
                                </label> 
                                </div>
                                
                                 <div className="form-group">  
                                 <label htmlFor="publisher">Publisher
                     <input type="text" 
                      className="form-control"
                                    id='publisher'
                                    onChange={(event)=>setPublisher(event.target.value)} 
                                /></label>
                                </div>
                                <div className="form-group">  
                                 <label htmlFor="category">Category
                     <input type="text" 
                     className="form-control"
                                id='category' 
                                onChange={(event)=>setCategory(event.target.value)} 
                                /></label>
                                 </div>
                                 <div className="form-group">  
                                 <label htmlFor="price">Price
                    <input type="number" 
                    className="form-control"
                                    id='price' 
                                    onChange={(event)=>setPrice(event.target.value)} 
                                /></label>
                                 </div>
                                 <div className="form-group">  
                                 <label htmlFor="img">Img
                     <input type="text" 
                     className="form-control"
                                    id='img' 
                                    onChange={(event)=>setImg(event.target.value)} 
                                /></label>
                     </div>
                     <div className="form-group">  
                     <button type="submit" onClick={(event)=>add(event)}>Add new Book</button> 
                   </div>
                    </form>
               
               
        </div>
    );
}
export default EditBooks;