import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Products from './components/Products';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Store from './Context/Store';
import { useContext } from 'react';
import { MyContext } from './Context/MyContext';
import { CircularProgress } from '@mui/material';
import { MainContainer } from './Styled/Styles';

function App() {
    return (
    <MainContainer>
      <Store>
    <Grid item>
      <SearchBar />
    </Grid>
      <Box lg={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} md={3} lg={3} xl={2}>
          <Filters />
        </Grid>
        <Grid item xs={7} sm={9} md={9} lg={9} xl={10}>
          <Products />
        </Grid>
      </Grid>
    </Box>
    </Store>
    </MainContainer>
  );
}

export default App;
