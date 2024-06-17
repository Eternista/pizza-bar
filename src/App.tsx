import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import { Header } from './components/partials/Header';
import { PizzaCatalog } from './components/PizzaCatalog';

function App() {

  return <>
    <Header />
    <main className='page container'>
      <PizzaCatalog />
    </main>
  </>;
}

export default App;
