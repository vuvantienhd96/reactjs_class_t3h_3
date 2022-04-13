import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'

// meterial ui
import { Typography, Button, Card, CardContent, CardActions, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'

//icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginInit, loginUserFacebook, loginUserGoogle } from '../redux/actions';
import SendIcon from '@mui/icons-material/Send';

export default function Login() {

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
      });
    
    const dispatch = useDispatch();
    
    let navigate = useNavigate();
    
    // get state from redux
    const { currentUser } = useSelector((state) => state.user);
    const token = localStorage.getItem('myCat');
    
    useEffect(() => {
        if(currentUser){
          navigate("/");
        }
        
      }, [currentUser, navigate])

    const handleLogin = (e) => {
        if(!values.email || !values.password){
            return;
        }
        dispatch(loginInit(values.email, values.password));
        setValues({
            ...values,
            password: '',
            email: '',
        })
    }

    const handleGooleLogin = () => {
        dispatch(loginUserGoogle());
    }

    const handleFbLogin = () => {
        dispatch(loginUserFacebook())

    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      console.log('$values', values);
    return (
        <div id="loginform">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <form className='form-login' onSubmit={handleLogin}>
                        <Typography variant="h4" gutterBottom component="div">
                            Sign In
                        </Typography>
                        <Box
                            sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, padding: '1rem' }}
                        >
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <TextField
                                    id="outlined-multiline-email"
                                    label="Email"
                                    name="email"
                                    multiline
                                    maxRows={4}
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Box>
                        <Button variant="contained" onClick={handleLogin} endIcon={<SendIcon />}>
                                Login
                        </Button>
                        <Typography variant="h6" gutterBottom component="div">
                            or
                        </Typography>
                        <Box
                            sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, padding: '1rem' }}
                        >
                            <div className='form-login__content'>
                                <Button variant="contained" color="error" endIcon={<GoogleIcon />} onClick={handleGooleLogin}>
                                    Sign In With Google
                                </Button>
                            </div>
                            <div className='form-login__content'>
                                <Button variant="contained" endIcon={<FacebookIcon />} onClick={handleFbLogin}>
                                    Sign In With FaceBook
                                </Button>
                            </div>
                        </Box>

                    </form>
                </CardContent>
            </Card>

        </div>
    )
}
