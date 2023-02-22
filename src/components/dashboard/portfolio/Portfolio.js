import React from 'react'
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="portfolio__head">
        <div className="portfolio__head__title">Portfolio</div>
        <div className="portfolio__head__value"><h4 style={{display:"inline"}}>Total value :</h4><span>1000$</span></div>
      </div>
      <div className="portfolio__data">
        <div className="portfolio__data__circle"></div>
        <div className="portfolio__data__list">
          
            <div className='portfolio__data__list__item'>
              <div className='portfolio__data__list__item__pointer'></div>
              <span>Tether</span>
            </div>
            <div className='portfolio__data__list__item'>
              <div className='portfolio__data__list__item__pointer'></div>
              <span>Luna</span>
            </div>
            <div className='portfolio__data__list__item'>
              <div className='portfolio__data__list__item__pointer'></div>
              <span>Ethereum</span>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio