import React, {useRef} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkM from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from "react-router-dom";
import {login,checkActiveSession} from "../actions/authActions";
import {useDispatch} from "react-redux";

export default function LoginComponent(props){
    const classes = props.styles;
    const history = useHistory();
    const refEmail = useRef();
    const refPassword = useRef();
    const dispatch = useDispatch();

    const signIn = async(event, provider) => {
      event.preventDefault();
      
        if(provider ==="email" && (refEmail.current.value=== "" || refPassword.current.value === "")){
          alert('Debe ingresar la contraseña y el email para poder iniciar sesión')
        }
        else{
          try{
        await dispatch(login(provider, refEmail.current.value, refPassword.current.value));
        dispatch(checkActiveSession(true));
        history.push("/chat");
      }catch(error){
        alert(error.message);
      }}
    }

    return (
        <form className={classes.form} noValidate onSubmit={(event) => signIn(event, "email")}>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={refPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button          
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => signIn(event, "google")}
          >
            Sign In with Google
          </Button>
          <Grid container>
            <Grid item xs>
            <LinkM variant="body2">
                <Link to="/Forgotpassword">{"Forgot password?"}</Link>
              </LinkM>
            </Grid>
            <Grid item>
              <LinkM variant="body2">
                <Link to="/registro">{"Don't have an account? Sign Up"}</Link>
              </LinkM>
            </Grid>
          </Grid>
        </form>
    )
}