
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase } from './style-components';
import { useState } from 'react';
import { Typography } from '@mui/material';



export default function SearchForm({
    onSubmit,
    eventName
}) {
const [value, setValue] = useState("");
const [error, setError] = useState("")
  return (
          <div>
            <Search onSubmit={(e)=> {
            e.preventDefault()
            onSubmit(eventName, e.target.search.value)
            e.target.search.value = ""
          }}>
          
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name='search'
              onChange={(e)=> {
               if(e.target.value){
                if(!isNaN(+e.target.value)){
                    setError("you can't write a number")
                }else{
                    setError("")
                    setValue(e.target.value)
                }
               }else{
                setError("write the text")
               }
              }}
            />
            <IconButton type='submit' sx={{color:"white"}} disabled={!!error || !(!!value)}>
            <SearchIcon  color='#FFFFFF'/>
            </IconButton>
          </Search>
          <Typography color="error">{error}</Typography>
          </div>
   
  );
}