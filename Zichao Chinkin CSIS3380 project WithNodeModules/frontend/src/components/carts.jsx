import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaCartArrowDown,  FaMoneyBillWaveAlt, FaTrash } from 'react-icons/fa';


const Carts = ({shoppingCart , changeQty=f=>f, allTotal, dropCartItem=f=>f}) => {
     

    var tableHead = <p> Your shopping cart is empty</p>
    if (shoppingCart.length>0)
    {
        tableHead =<tr>
                    <th></th>
                    <th>Book Name</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th >Drop</th>
         </tr>;
        
    var list = shoppingCart.map((book, index) => <tr>
            <td><img src={book.img} alt={book.img} style={{ height: '100px', width: 'auto' } }></img></td>
            <td style={{ height: 'auto', width: '30%' }}> {book.title}</td>
            <td style={{ height: 'auto', width: '10%' }}> $ {book.price}</td>
            <td style={{ height: 'auto', width: '5%' }}><input type="number"  min="1" 
                                                            value={book.qty} onChange={event=> changeQty(event, index)}               ></input> </td>
            <td style={{ height: 'auto', width: '10%' }}><button value={index} onClick={(event)=> dropCartItem(event, index)}> <FaTrash/></button> </td>
    </tr>
    );}


    return (
        <div style={{width:"90%", display:"block", marginLeft:"auto", marginRight:"auto"}}>
            <FaCartArrowDown style={{ height: '4em', width: 'auto', color:'green'}}/>
            <center>
                <table className="table table-bordered" style={{backgroundColor:"white"}}>
                {tableHead}
                <tbody>
                {list}
                <tr><td></td><td></td> <td></td> TOTAL $ {allTotal}</tr>
                </tbody>
                </table>
                <button style={{ height: '2em', width: '10%' }}>  <FaMoneyBillWaveAlt style={{color:'green'}}/> Pay </button>
            </center>

        </div>
    );

}
export default Carts;
