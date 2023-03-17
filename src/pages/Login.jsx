import { ThemeProvider } from '@emotion/react'
import { Button, Card, createTheme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const theme = createTheme();


    return (
        <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: {xs:'62vw', sm:'50vw', md:'40vw'}, height: {xs:'35vh', sm:'40vh', md:'50vh'}, borderRadius:'5px', boxShadow: '0px 0px 6px 0px #dee2e8', display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                <Typography variant='h4'sx={{fontWeight:'bold', fontSize:{xs:'25px', sm:'30px', md:'40px'}}}>Who are you?</Typography>
                <Box mt={4} sx={{display:"flex", justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
                <Button size='medium' sx={{margin:'1rem 1rem'}} variant="contained" color="success" onClick={()=> navigate("/loginAsUser")}>
                    Login as User
                </Button>
                <Button size='medium' sx={{margin:'1rem 1rem'}} variant="contained" color="success" onClick={()=> navigate("/loginAsAdmin")}>
                    Login as Admin
                </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;
