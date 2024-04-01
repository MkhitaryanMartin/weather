import * as React from 'react';
import {IconButton, InputBase, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Form({
    onSubmit,
    eventName
}) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', 
      display: 'flex', 
      alignItems: 'center', 
      width: 400 
    }}
      onSubmit={(e)=> {
        e.preventDefault();
        onSubmit(eventName, e.target.search.value)
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        name='search'
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon/>
      </IconButton>
   

    </Paper>
  );
}