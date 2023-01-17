import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <Content />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
