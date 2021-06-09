import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import { authenticate } from './api/AuthApi';
import { useHistory } from 'react-router';
import logo from './images/theCat.png';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
      TheCatCoder Organization.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: '100vw',
    },      
    body: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
export default function SignInSide() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
  
    const handleSubmit =  async (e) => {
      setErrorMessage('');
  
      const response = await authenticate(email, password);
  
      if ( response.data === 'SUCCESS')
        history.push('/product');
      else
        setErrorMessage('Example error message!');
  
      console.log( response.data );
    };  
 
    return (
        <div className={classes.paper}>
        <img src={logo} alt='logo'/>
        <Typography component="h1" variant="h4">
            Welcome to Mad Cat Coffee
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
            {errorMessage && (
            <p> {errorMessage} </p>
            )}
            <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            >
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid>
            <Box mt={5}>
            <Copyright />
            </Box>
        </form>
        </div>
    );
}
