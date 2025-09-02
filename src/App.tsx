import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import DataBlock from './components/DataBlock'

function App() {

  return (
    <>
      <Header />
      <div className='userInputArea'>
        <DataBlock blockType={"userInfo"}/>
        <DataBlock blockType={"skills"}/>
        <DataBlock blockType={"experiences"}/>
      </div>
    </>
  )
}

export default App