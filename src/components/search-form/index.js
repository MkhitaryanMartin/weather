import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase } from './style-components';



export default function SearchForm({
    onSubmit,
    eventName
}) {
  return (
          <Search onSubmit={(e)=> {
            e.preventDefault()
            onSubmit(eventName, e.target.search.value)
          }}>
          
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name='search'
            />
            <IconButton type='submit' sx={{color:"white"}}>
            <SearchIcon  color='#FFFFFF'/>
            </IconButton>
          </Search>
   
  );
}