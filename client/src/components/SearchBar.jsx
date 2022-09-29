import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:"5rem",
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    color: "black"
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '25rem',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar() {
  return (
   <Grid container>
      <AppBar sx={{backgroundColor:"transparent", position:'sticky'}} elevation={0}>
        <Toolbar style={{
         display: 'flex', 
         justifyContent: 'center', 
         alignItems:"center", 
         marginTop:"6rem"
         }} >
         <Grid item className="search-bar">
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{width: '20rem', height:'auto', borderRadius:"50%"}}
            />
          </Search>
          </Grid>
        </Toolbar>
      </AppBar>
      </Grid>

  );
}