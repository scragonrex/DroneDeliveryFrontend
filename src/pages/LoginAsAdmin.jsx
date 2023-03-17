import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput, Snackbar, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const LoginAsAdmin = () => {
    const navigate = useNavigate();
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

    const login = ()=>{
        navigate("/admin");
    }

  return (
    <Box width='100vw' height='100vh' m={0} p={0} sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box backgroundColor='white' borderRadius={1} sx={{width: {xs:'17rem',md:'25rem'}, height: '18rem', p: 3, boxShadow: '0px 0px 6px 0px #dee2e8', margin: 'auto' }}>
      <Typography variant='h4' component='div' textAlign='center' sx={{fontSize:{xs:'28px', md:'35px'}, fontWeight:'bold'}} >Login as Admin</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField name='email' value={user.email} onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" sx={{ margin: '1rem 2rem' }} />
        <TextField name='password' value={user.password} onChange={handleChange} id="outlined-basic" type="password" label="password" variant="outlined" sx={{ margin: '1rem 2rem' }} />
          <Button sx={{margin:'1rem 7rem', padding:'0.5rem'}} variant="contained" onClick={login}>Login</Button>
      </Box>
    </Box>
  </Box>
  )
}

export default LoginAsAdmin
