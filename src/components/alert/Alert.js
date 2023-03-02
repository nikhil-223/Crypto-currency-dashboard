import React, { useContext, useEffect } from 'react'
import CoinContext from '../../context/CoinContext'
import './Alert.scss'

const Alert = () => {

  const {alert,theme} = useContext(CoinContext)
  useEffect(() => {
    if(alert.message!=="")

   { setTimeout(() => {
      document.getElementsByClassName('alert')[0].classList.remove('show_alert')
    }, 4500);
    document.getElementsByClassName('alert')[0].classList.add('show_alert')}

  }, [alert])
  
  return (
    <div className={`alert bg-alert-${theme==="dark"? "dark":"light"} text-${theme==="dark"? "light":"dark"}`}>{alert.message}</div>
  )
}

export default Alert