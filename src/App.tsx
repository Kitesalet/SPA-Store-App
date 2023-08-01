import './App.css';
import {Container, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import Catalog from './Layout/Catalog/Catalog';
import Header from './Layout/Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  const [darkMode,setDarkMode] = useState(false)


  const paletteType = () =>{
    if(darkMode === true){
      return("dark")
    }
    else{
      return("light")
    }
  }

  const darkHandler = () =>{

    setDarkMode(!darkMode)

  }

  const theme = createTheme({
    palette:{
      mode: paletteType(),
      background:{
      default: darkMode == false ? "#eaeaea" : "#121212"
      }
      
    }
  })
  
  return (
    <div className="App">
    
      <ThemeProvider theme={theme}>

      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} darkHandler={darkHandler}></Header>
      <Container>
      
        <Outlet></Outlet>

      </Container>

      </ThemeProvider>

    </div>
  );
}

export default App;
