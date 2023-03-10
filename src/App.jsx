import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
