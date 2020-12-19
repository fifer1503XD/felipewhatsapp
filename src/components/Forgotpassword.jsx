import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { forgotPassword } from '../actions/authActions';
import {useHistory } from "react-router-dom";;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotpasswordComponent(props){
  const classes = useStyles();
    const history = useHistory();
    const refEmail = useRef();
    const dispatch = useDispatch();




const forgotPass = async(event) => {
  event.preventDefault();
  try{
    await dispatch(forgotPassword ( refEmail.current.value));
    alert('Correo derecuperación de contraseña enviado, revisa tu email')
    history.push("/");
  }catch(error){
    console.log("email incorrecto");
  }
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <form className={classes.form} noValidate onSubmit={(event) => forgotPass(event, "email")}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={refEmail}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Recuperar contraseña
          </Button>
          
          
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}
