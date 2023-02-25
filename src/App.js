import React from 'react'
import { Dashboard } from './components'
import CoinState from './context/CoinState'

const App = () => {
  return (
    <>
    <CoinState>
        <Dashboard/>
    </CoinState>
    </>
    
  )
}

export default App