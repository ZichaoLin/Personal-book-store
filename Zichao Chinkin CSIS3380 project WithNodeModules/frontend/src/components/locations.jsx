import MyMap from "./myMap";
import { FaMap, FaMapMarkedAlt, FaMapPin } from "react-icons/fa";
const Locations =()=>{

    return(
        
           
        <div style={{width: '100%', height: 'auto'}}>   
        <FaMapMarkedAlt style={{width: '10%', height: 'auto', color:"palevioletred"}} />
        <p>L & L 's Book Company Lcoation </p>
        <MyMap/>
        </div>
        
    );

}
export default Locations;