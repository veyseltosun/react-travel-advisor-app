
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const style = {
    container: {
        padding: 25,

    },
    formControl: {
        margin: 10,
        minWidth: 120,
        marginBottom: 30,

    }
}

const List = ({ type, setType, isLoading, childClicked, places }) => {

    return (
        <div style={style.container}>
            <FormControl sx={style.formControl}>
                <InputLabel id='type'>Type:</InputLabel>
                <Select id='placeType' value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>

                </Select>

            </FormControl>
        </div>
    )
}

export default List