import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput, Snackbar, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const LoginAsUser = () => {
  // return (
  //   <Box sx={{width:'100%', height:'100vh'}}>
  //  <Box sx={{display:'flex', flexDirection:'column', padding:'1.2rem' , border:'2px solid black'}}>
  //       <TextField
  //         id="filled-password-input"
  //         label="Email"
  //         variant="outlined"
  //         sx={{margin:'1rem', maxWidth:'400px'}}
  //       />
  //       <TextField
  //         id="filled-password-input"
  //         label="password"
  //         type="password"
  //         variant="outlined"
  //         sx={{margin:'1rem', maxWidth:'400px'}}
  //       />
  //  </Box></Box>
  // )
  const [userNotReg, setUserNotReg] = useState(false)
  const [invalidPass, setinvalidPass] = useState(false)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(
      {
        ...user,
        [name]: value
      }
    )
  }

  const handleClick = () => {
    // history.push("/register");
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setUserNotReg(false);
  };
  const login = () => {
    setOpen(true);
    // axios.post("https://loginappbackend.onrender.com/login", user)
    //   .then(res => {
    //     let mes = res.data.message;
    //     if (mes === "Invalid Password")
    //       setinvalidPass(true);
    //     if (mes === "User not registered")
    //       setUserNotReg(true);
    //     setLoginUser(res.data.user)
    //     history.push("/")
    //     setOpen(false)
    //   })
  }
  return (
    <Box width='100vw' height='100vh' m={0} p={0} sx={{ display: 'flex', flexDirection: 'column' }}>
      {open && <Box m={0} sx={{ width: '100%' }}> <LinearProgress sx={{ height: '5px' }} /></Box>}
      <Snackbar open={userNotReg} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">User not registered!</Alert>
      </Snackbar>
      <Box backgroundColor='white' borderRadius={1} sx={{ width: {xs:'17rem',md:'25rem'}, height: '18rem', p: 3, boxShadow: '0px 0px 6px 0px #dee2e8', margin: 'auto' }}>
        <Typography variant='h4' component='div' textAlign='center' sx={{fontSize:{xs:'28px', md:'35px'} ,fontWeight:'bold'}}>Login as User</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <TextField name='email' value={user.email} onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" sx={{ margin: '1rem 2rem' }} />
          <FormControl error={invalidPass} sx={{ margin: '1rem 2rem' }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              name='password'
              value={user.password} onChange={handleChange}
              id="outlined-adornment-password"

              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {invalidPass && <FormHelperText>Invalid password</FormHelperText>}
          </FormControl>
          <Box sx={{ display:'flex', justifyContent:'space-between', margin:{xs:'0 1rem',md:'0 2rem'}}}>
            <Button variant="contained" onClick={login}>Login</Button>
            <Box m={1}>
              <Link to='/register' style={{textDecoration:'none', color:'blue'}}>Don't have account?</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginAsUser
