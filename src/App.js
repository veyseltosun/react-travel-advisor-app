import { CssBaseline } from '@mui/material'
import React from 'react'
import Header from './components/Header';
import Map from './components/Map';

const App = () => {
  return (
    <div>
      <CssBaseline/>
      <Header/>
      <Map/>
    </div>
  )
}

export default App