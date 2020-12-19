import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import {useDispatch } from 'react-redux'
import { logout } from '../actions/authActions';
import firebase from "../firebase";
import {useHistory } from "react-router-dom";



export default function MenuProfile(props) {
  const dispatch = useDispatch(); 
  const history = useHistory();
  const logoutfn = async() => {
 
    try{
      await dispatch(logout(false));
      history.push("/");
    }catch(error){
      console.log("Las credenciales para el usuario son incorrectas");
    }
  }
   return(<>
          

              <Dropdown.Item eventKey="3">Configuración</Dropdown.Item>
              <Dropdown.Item onClick={() => (logoutfn())}>Cerrar sesion</Dropdown.Item>
            
          
          </>
          )
        }