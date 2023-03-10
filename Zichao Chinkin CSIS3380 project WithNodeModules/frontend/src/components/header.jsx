import logo from '../images/booksIcon.png';

const Header=()=>{

    return(
        <div id="PageTitle">
        <h1 style={{fontSize:"3em"}}>
        <img src={logo} style={{width:"10%"}}></img> &nbsp;
        <span id ="LL">  &nbsp; L  &nbsp; </span> &nbsp; &  &nbsp; 
        <span id ="LL"> &nbsp; L  &nbsp; </span> 
        
        's Book Company 
        </h1>
        </div>
    )

}
export default Header;