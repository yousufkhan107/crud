import React from "react";
import TextField from '@mui/material/TextField';

const InpComp =({label,onChange,value})=>{


    return(
        <TextField id="filled-basic" label={label} variant="filled" value={value} onChange={onChange} />

    )
}
export default InpComp;
