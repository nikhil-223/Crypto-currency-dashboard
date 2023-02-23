import React from 'react'
import './MarketItem.scss'
import { AiOutlineCaretDown } from "react-icons/ai";


const MarketItem = () => {
  return (
    <div className='market-item'>
        <div className="market-item__detail">
        <div className="market-item__detail__crypto">Tether</div>
        <div className="market-item__detail__value">Mkt.Cap $197,484</div>
        </div>
        <div className="market-item__change">
            <div className="market-item__change__icon"><AiOutlineCaretDown/></div>
            <div className="market-item__change__value">2.12 %</div>
        </div>
    </div>
  )
}

export default MarketItem