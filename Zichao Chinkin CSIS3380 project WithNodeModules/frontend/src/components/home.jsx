import {useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Home = ({ showBookList }) => {

    const bookList = showBookList;
    const url = "https://type.fit/api/quotes";
    
    // ASYNC and AWAIT
    const [quote, setQuote] = useState();
    const [quoteAuthor, setQuoteAuthor] = useState();

    

    const quotesAPI = async ()=>{
    try
    {
        const res = await axios.get(url)
        const data = res.data;
        var index = new Date().getDate()
        setQuote(data[index].text);
        setQuoteAuthor(data[index].author) ;    
                   
            }
            catch(err){
                console.log("error: ", err)
            }
            }

            quotesAPI();

    return (
        <div>
            <center>
                <br></br>
                <h3 id="quote"> --- Today's inspiration --- </h3>
                <h3>  "  {quote}  "   </h3>
                <p> by {quoteAuthor} </p>


                <Link to="/books" style={{fontSize:"2em"}}> Christmas Sales  CLICK HERE 
                
                <img src="https://static.vecteezy.com/system/resources/previews/001/921/206/original/christmas-sale-up-to-50-off-discount-banner-with-big-full-moon-on-starry-sky-silhouette-santa-claus-frame-of-christmas-tree-and-orange-button-vector.jpg"  
                     alt="xmasSales" 
                     style={{width:"90%" }}/>
                </Link>
            </center>

        </div>
    );

}
export default Home;