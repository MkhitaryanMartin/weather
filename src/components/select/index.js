import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({
    handleChange,
    options,
    value,
    label="",
    eventName=""

}) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 80}}>
    {/* <InputLabel id="demo-simple-select-standard-label">{label}aa</InputLabel> */}
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={value}
      onChange={(e)=>handleChange( eventName, e.target.value)}
      label={label}
      sx={{background:"white"}}
    >
  {
    options.map((option)=> {
        return <MenuItem value={option.value} key={option.text}>{option.text}</MenuItem>
    })
  }
    </Select>
  </FormControl>
  );
}

