import React from "react";
import axios from "axios";

import "./WarehousesPage.scss";

import WarehouseCard from "../../components/Warehouse/WarehouseCard/WarehouseCard";
import ArrowSort from "../../assets/icons/sort-24px.svg";

const { useEffect, useState } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

function WarehousesPage() {
	const [warehouse, setWarehouse] = useState(null);

	//----- Fetch Warehouse List -------
	useEffect(() => {
		const getWarehouseList = async () => {
			try {
				const response = await axios.get(`${API_URL}/`);
				console.log(response.data);
				const warehouseData = response.data;
				setWarehouse(warehouseData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getWarehouseList();
	}, []);

	if (warehouse === null || warehouse === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="list__section">
			<div className="list__header-container">
				<h1 className="list__title">Warehouses</h1>
				<div className="warehouse__searchBar-container">
        <input className="warehouse__searchBar" type="text" placeholder="Search"></input>

			  	<div className="warehouse__btn">+ Add New Warehouse</div>
        </div>
			</div>
			<div className="list__container">
				<div className="list__label-container5">
					<div className="list__label-box5">
						<span className="list__label ">WAREHOUSE</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box5">
						<span className="list__label ">ADDRESS</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box5">
						<span className="list__label ">CONTACT NAME</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box5">
						<span className="list__label ">CONTACT INFORMATION</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box5">
						<span className="list__label ">ACTION</span>
					</div>
				</div>
				{warehouse.warehouseData.map((warehouse, index) => (
					<WarehouseCard key={index} warehouse={warehouse} />
				))}
			</div>
		</section>
	);
}

export default WarehousesPage