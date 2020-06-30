import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Cover from './components/cover';
import Info from './components/info';

import { CssBaseline } from '@material-ui/core';
import Statement from './components/statement';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Cover />
      <Statement/>
      <Info />
    </div>
  );
}

export default App;
