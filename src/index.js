import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header';
import BgElement from './components/bgElement';
import data from './components/data.json'

const { slides } = data;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <Header data = {slides}/>  */}
    <BgElement></BgElement>
    <Header></Header>
  </React.StrictMode>
);

