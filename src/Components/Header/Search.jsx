import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')`
  border-radius: 2px;
  background-color: #fff;
  margin-left: 10px;
  width: 38%;
  display: flex;
  color: black;
`

const SearchIconWrapper = styled('div')`
  margin-left: auto;
  margin-top: auto;
  padding: 5px;
  height: 100%;
  color: blue;
`

const StyledInputBase = styled(InputBase)`
  color: inherit;
   width: 100%;
   font-size: unset;
 
   & .MuiInputBase-input{
     padding-left: 34px;
     padding-top: 6px;
    
  }
`;
export default function SearchBar() {
  
  return (
          <Search>
            <StyledInputBase
              placeholder="Search for items …"
              inputProps={{ 'aria-label': 'search' }}
            />
              <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
          </Search>
  );
}

