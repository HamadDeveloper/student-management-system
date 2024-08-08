import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateStudent from './components/CreateStudent'

function App() {
  

  return (
    <div className='app-container'>
     <h1 className='app-title'>Student Management system</h1>
     <CreateStudent />
       
    </div>
  )
}

export default App
