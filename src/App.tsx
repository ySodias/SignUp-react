import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BodyHome, Header } from './components'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Header></Header>
      <BodyHome></BodyHome>
    </div>
  )
}

export default App
