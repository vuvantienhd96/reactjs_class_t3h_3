import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

// meterial ui
import { Typography, Button, Card, CardContent, CardActions, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'

//icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { registerInit } from '../redux/actions';


export default function Register() {

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    // refvalue
    const emailRef = useRef();
    const passWordRef = useRef();
    const nameRef = useRef();

    let navigate = useNavigate();
    
    // get state from redux
    const { currentUser } = useSelector((state) => state.user);

    // redux
    const dispatch = useDispatch();

    useEffect(() => {
      if(currentUser){
        navigate("/");
      }
      
    }, [currentUser, navigate])
    console.log('$currentUser', currentUser);

    const handleLogin = () => {
        console.log('$email',emailRef.current.value);
        console.log('$passWordRef',passWordRef.current.value);
        if(emailRef.current.value === '' || passWordRef.current.value === '' || nameRef.current.value === ''){
          alert("please input again !");
        }
        dispatch(registerInit(emailRef.current.value, passWordRef.current.value, nameRef.current.value));
    }

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div id="loginform">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <form className='form-login'>
                        <Typography variant="h4" gutterBottom component="div">
                            Register
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
                                    inputRef={emailRef}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <TextField
                                    id="outlined-multiline-email"
                                    label="Name"
                                    name="name"
                                    multiline
                                    maxRows={4}
                                    value={values.name}
                                    inputRef={nameRef}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    inputRef={passWordRef}
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
                            <Button variant="contained" onClick={handleLogin} endIcon={<SendIcon />}>
                              Register
                            </Button>

                        </Box>
                        <Link to='/loginRef'>
                                <Button color='warning' endIcon={<InsertLinkIcon />}>
                                  login Now
                                </Button>
                        </Link>

                    </form>
                </CardContent>
            </Card>

        </div>
    )
}
