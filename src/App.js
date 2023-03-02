import React from 'react'
import { Dashboard } from './components'
import Alert from './components/alert/Alert'
import CoinState from './context/CoinState'

const App = () => {
  return (
    <>
    <CoinState>
      <Alert/>
        <Dashboard/>
    </CoinState>
    </>
    
  )
}

export default App