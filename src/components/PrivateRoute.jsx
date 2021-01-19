import React from "react";
import {Route} from "react-router-dom";
import { useSelector} from 'react-redux'



export default function PrivateRoute(props){

    let sesionActive= useSelector(state => state.auth.sesionActive)
    

    return (
        <Route path={props.path} render={
             
            () => sesionActive ? (React.cloneElement(props.children, {user: props.user})) : ((<><h1>Debes iniciar sesion para ingresar a fifer messenger</h1>,</>))
        } />
    )
}