import React from "react"
import "./UserHeader.css";
function UserHeader(props){

return ( 
 <div className="main">  
<img src={props.imgSrc}></img>
<h1>{props.userName}</h1>


</div> 
)}

export default UserHeader
