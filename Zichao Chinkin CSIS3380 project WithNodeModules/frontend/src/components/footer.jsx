const Footer=()=>{

    var Months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

var currentDay = new Date();
let month = Months[currentDay.getMonth()];
let year = currentDay.getFullYear();

    return(
        
        <footer id="footer">
            <br></br>
            <p> created by chin kin Leung /Zichao Lin CSIS 3380-001 {month} {year}</p>
        </footer>
        
    )

}
export default Footer;