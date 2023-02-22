import React from 'react'
import './Chart.scss'
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";



const Chart = () => {
  return (
		<div className="chart">
			<div className="chart__menu">
				<div className="chart__menu__time-period">
					<div className="chart__menu__time-period__item">1D</div>
					<div className="chart__menu__time-period__item">1W</div>
					<div className="chart__menu__time-period__item">1M</div>
					<div className="chart__menu__time-period__item">6M</div>
					<div className="chart__menu__time-period__item">1Y</div>
					<div className="chart__menu__time-period__item">
						<BsFillCalendarWeekFill/>
					</div>
				</div>
				<div className="chart__menu__drop">
					<div className="chart__menu__drop__cryto ">
						Cryptocurrency
						<AiOutlineCaretDown />
					</div>
					<div className="chart__menu__drop__chart-type">
						Chart type
						<AiOutlineCaretDown />
					</div>
				</div>
			</div>
			<div className="chart__graph"></div>
		</div>
	);
}

export default Chart