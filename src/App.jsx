import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Header';
import { Footer } from './Footer';

function ProductsNew() {}

function ProductsIndex() {}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

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
