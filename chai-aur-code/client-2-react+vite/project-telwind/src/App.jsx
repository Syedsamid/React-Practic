import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './components/card'

function App() {
  return (
    <>
     <h1 className='bg-blue-500 text-black text-center p-2 rounded-xl'>Tailwind</h1>

     
    <MyCard Title="Samid" Subtitle="Code for India" />
     
    </>
  )
}

export default App
