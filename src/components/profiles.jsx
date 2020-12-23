import React from "react";


export default function Profile(props) {
    let img
    if(props.imgProfile!==""){
        img=props.imgProfile
    }
    else{
        img="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
    }
 return(
     <div className="containerprofile">
         <img src={`${img}`}className="imgprofileuser"></img>
         <h4 className="nameProfile">{props.name.toLocaleUpperCase()} {props.lastname.toLocaleUpperCase()}</h4>
     </div>

 )
    
}

   
     