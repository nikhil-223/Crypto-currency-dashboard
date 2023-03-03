import React, { useContext } from "react";
import "./PhoneMenu.scss";
import CoinContext from "../../context/CoinContext";
import PhoneMenuItem from "./phoneMenuItem/PhoneMenuItem";

const PhoneMenu = () => {
	const { theme, phoneMenuItems } =
		useContext(CoinContext);
	return (
		<div
			className={`phoneMenu bg-phoneMenu-${
				theme === "dark" ? "dark" : "light"
			} text-phoneMenu-${theme === "dark" ? "light" : "dark"}`}>

			{	phoneMenuItems.map((item)=>{
					return <PhoneMenuItem key={item.itemName} name={item.itemName} icon={item.icon}/>
			})
			}
		</div>
	);
};

export default PhoneMenu;
