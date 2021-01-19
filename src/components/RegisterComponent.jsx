import React, {useRef} from "react";
import {Grid, TextField, Button} from "@material-ui/core";
import {useHistory } from "react-router-dom";
import LinkM from '@material-ui/core/Link';
import {Register} from "../actions/authActions";
import {useDispatch} from "react-redux";
export default function RegisterComponent(props){
    const classes = props.styles;
    const history = useHistory();
    const refEmail = useRef();
    const refPassword = useRef();
    const refName= useRef();
    const refLastName= useRef();
    const dispatch = useDispatch();
    
   
    const Registeruser = async(event) => {
      event.preventDefault();
      let name=`${refName.current.value} ${refLastName.current.value}`
      console.log(name)
      console.log(refEmail.current.value, refPassword.current.value)
      if(refEmail.current.value=== "" ){
        alert('Debe ingresarel email para poder registrarse')
      }
      if(refPassword.current.value=== "" ){
        alert('Debe ingresar la contraseña para poder registrarse')
      }
      if(refName.current.value=== "" || refLastName.current.value=== ""  ){
        alert('Debe ingresar su nombre y apellido para poder registrarse')
      }
      else{
      try{
        await dispatch(Register(`${refEmail.current.value}`, `${refPassword.current.value}`,`${refName.current.value}`, `${refLastName.current.value}`));
        alert('Usuario registrado, inicia sesión')
        history.push("/");
      }catch(error){
        alert(error.message)
      }
      
     
    }
  }
  // const postUsser =()=>{
  //   try{
  //     dispatch(postNewUsser(`${refEmail.current.value}`, `${refPassword.current.value}`,`${refName.current.value}`, `${refLastName.current.value}`,user))
  //     alert('se hizo el post')
  //     history.push("/");
  //   }catch(error){
  //     alert(error.message)
  //   }
  
    return (
        <form className={props.styles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={refName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={refLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={refEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={refPassword}
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => Registeruser(event)}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LinkM href="#" variant="body2">
                Already have an account? Sign in
              </LinkM>
            </Grid>
          </Grid>
        </form>
    )
}