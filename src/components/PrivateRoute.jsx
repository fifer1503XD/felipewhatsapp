import React from "react";
import {Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { checkActiveSession } from '../actions/authActions';


export default function PrivateRoute(props){
    const dispatch = useDispatch();
    let sesionActive= useSelector(state => state.auth.sesionActive)
    const user = useSelector(state => state.auth)

    return (
        <Route path={props.path} render={
             
            () => sesionActive ? (React.cloneElement(props.children, {user: props.user})) : ((<><h1>Debes iniciar sesion para ingresar a fifer messenger</h1>,</>))
        } />
    )
}