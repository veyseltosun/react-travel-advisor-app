import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const style = {
    title:{
        fontSize:24,

    }
}

const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography sx={style.title}>
                Travel Advisor
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header