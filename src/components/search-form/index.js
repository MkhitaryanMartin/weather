
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase } from './style-components';
import { useState } from 'react';


export default function SearchForm({
    onSubmit,
    eventName
}) {
const [value, setValue] = useState("");

const onChange = (e)=>{
  setValue(e.target.value)
}

  return (
          <div>
            <Search onSubmit={(e)=> {
            e.preventDefault()
            onSubmit(eventName, e.target.search.value)
            setValue("")
          }}>
          
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name='search'
              value={value}
              onChange={(e)=> onChange(e)}
            />
            <IconButton type='submit' sx={{color:"white"}} disabled={!(!!value)}>
            <SearchIcon  color='#FFFFFF'/>
            </IconButton>
          </Search>
          </div>
   
  );
}