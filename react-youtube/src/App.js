import React from 'react';
import './App.css';
import SubComponent from './components/SubComponent';
import Footer from './components/Footer';
import './components/Footer.css';
import Card from './components/Card';

function App() {
  return (
   <>
   <div className="app-container">
    <h2>Hi samid</h2>
    <SubComponent/>
    <Footer/>
    <Card/>
    </div>
   </>
  )
}

export default App