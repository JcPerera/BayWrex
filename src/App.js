import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import {amber} from "@material-ui/core/colors";
import './App.css';

import Navbar from './components/navbar';
import Cover from './components/cover';
import Info from './components/info';
import Statement from './components/statement';
import Testimonials from './components/testimonials';
import Gallery from './components/gallery';

const theme = createMuiTheme({
  palette: {
    primary: amber
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navbar />
        <Cover />
        <Statement />
        <Info />
        <Gallery />
        <Testimonials />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
