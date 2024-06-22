import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';
import { PizzaCatalog } from './components/PizzaCatalog';

function App() {

  return <>
    <Header />
    <main className='page container'>
      <PizzaCatalog />
    </main>
    <Footer/>
  </>;
}

export default App;
