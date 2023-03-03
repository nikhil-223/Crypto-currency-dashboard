import React from 'react'
import { Dashboard } from './components'
import Alert from './components/alert/Alert'
import PhoneMenu from './components/PhoneMenu/PhoneMenu'
import CoinState from './context/CoinState'

const App = () => {
  return (
    <>
    <CoinState>
      <PhoneMenu/>
      <Alert/>
        <div className="dashboard__overflow"><Dashboard/></div>
    </CoinState>
    </>
    
  )
}

export default App