import React, { useContext } from 'react'
import CoinContext from '../../../context/CoinContext';
import "./PhoneMenuItem.scss"

const PhoneMenuItem = (props) => {
    const { theme, setPhoneMenuItemActive ,phoneMenuItemActive} =
			useContext(CoinContext);
    const {name,icon}=props;



    const item_show = (e) => {
            let itemName = e.target
							.closest(".phoneMenu__item")
							.getElementsByTagName("span")[0].innerHTML;
			setPhoneMenuItemActive(itemName);

            if(itemName==="Markets"){
			document.querySelector(".exchange-coins").style.zIndex = "-10";
			document.querySelector(".portfolio").style.zIndex = "-10";}
            else if(itemName==="Home"){
			document.querySelector(".exchange-coins").style.zIndex = "-10";
			document.querySelector(".portfolio").style.zIndex = "-10";}
            else if(itemName==="Exchange"){
			document.querySelector(".exchange-coins").style.zIndex = "90";
			document.querySelector(".portfolio").style.zIndex = "-10";}
            else {
			document.querySelector(".exchange-coins").style.zIndex = "-10";
			document.querySelector(".portfolio").style.zIndex = "90";}
		};
  return (
		<div
			className={`phoneMenu__item  text-phoneMenu-${
				theme === "dark" ? "light" : "dark"
			}`}
			style={
				name === phoneMenuItemActive
					? {
							color: theme === "dark" ? "rgb(87 168 235)" : "#089595",
					  }
					: {}
			}
			onClick={item_show}>
			<div className="phoneMenu__item__icon phoneMenu__item__icon-home">
				{icon}
			</div>
			<span>{name}</span>
		</div>
	);
}

export default PhoneMenuItem