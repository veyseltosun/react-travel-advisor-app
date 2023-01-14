import { CssBaseline, Grid, } from '@mui/material'
import React from 'react'
import Header from './components/Header';
import Map from './components/Map';
import List from './components/List';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container sx={{ width: "100%" }}>

        <Grid xs={12} md={4}>
          <List />
        </Grid>
        <Grid xs={12} md={8}>

          <Map />
        </Grid>

      </Grid>
    </div>
  )
}

export default App