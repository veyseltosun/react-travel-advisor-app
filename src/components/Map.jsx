import { Box } from '@mui/system'
import React from 'react';
import GoogleMapReact from "google-map-react"

const style = {
    mapContainer:{
        height:"85vh",
        width:"100%",

    }
}

const Map = () => {
  return (
    <Box sx={style.mapContainer}>
        
        <GoogleMapReact bootstrapURLKeys={{key:process.env.GOOGLE_MAP_API_KEY}}
        defaultCenter={{ lat: 41.282360,  lng:28.000590}}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI:true, zoomControl:true}}
        />
        
     

    </Box>
  )
}

export default Map