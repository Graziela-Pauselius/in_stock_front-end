import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./InventoryPage.scss";

import Modal from "../../components/Modal/Model";
import InventoryCard from "../../components/Inventory/InventoryCard/InventoryCard";
import ArrowSort from "../../assets/icons/sort-24px.svg";

const { useEffect, useState } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

const InventoryList = () => {
	const [inventory, setInventory] = useState(null);
	const [modal, setModal] = useState({
		showModal: false,
		activeId: "",
		activeName: "",
	});

	//----- Fetch Inventory List -------
	useEffect(() => {
		const getInventoryList = async () => {
			try {
				const response = await axios.get(`${API_URL}/inventory`);
				const inventoryData = response.data.inventoryData;
				setInventory(inventoryData);
			} catch (error) {
				console.log(error.message);
			}
		};
		getInventoryList();
	}, [modal.showModal]);

	const openDeleteModal = (id, name) => {
		setModal({ showModal: !modal.showModal, activeName: name, activeId: id });
	};

	if (inventory === null || inventory === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="list__section">
			<div className="list__header-container">
				<h1 className="list__title">Inventory</h1>
				<div className="list__btn-container">
					<div className="list__searchBar-container">
						<input
							className="list__searchBar"
							type="text"
							placeholder="Search"
						></input>
					</div>
					<Link to="/add-or-edit-inventory/">
						<button className="list__btn">+ Add New Item</button>
					</Link>
				</div>
			</div>
			<div className="list__container">
				<div className="list__label-container">
					<div className="list__label-x">
						<div className="list__label-right">
							<div className="list__label-box">
								<span className="list__label ">INVENTORY ITEM</span>
								<img className="list__label-icon" src={ArrowSort} alt="" />
							</div>
							<div className="list__label-box">
								<span className="list__label ">CATEGORY</span>
								<img className="list__label-icon" src={ArrowSort} alt="" />
							</div>
						</div>
						<div className="list__label-left">
							<div className="list__label-box list__label-status">
								<span className="list__label">STATUS</span>
								<img className="list__label-icon" src={ArrowSort} alt="" />
							</div>
							<div className="list__label-box">
								<span className="list__label ">QTY</span>
								<img className="list__label-icon" src={ArrowSort} alt="" />
							</div>
							<div className="list__label-box">
								<span className="list__label ">WAREHOUSE</span>
								<img className="list__label-icon" src={ArrowSort} alt="" />
							</div>
						</div>
					</div>
					<div className="list__label-box">
						<span className="list__label ">ACTION</span>
					</div>
				</div>
				{inventory.map((item, index) => (
					<InventoryCard
						key={index}
						item={item}
						openDeleteModal={openDeleteModal}
					/>
				))}
			</div>
			<Modal
				showModal={modal.showModal}
				setShowModal={setModal}
				modalTitle={`Delete ${modal.activeName} Inventory Item?`}
				modalContent={`Please confirm that you'd like to delete the ${modal.activeName} item from inventory list. 
				You won't be able to undo this action.`}
				endpointUrl={`http://localhost:8080/inventory/${modal.activeId}`}
			/>
		</section>
	);
};

export default InventoryList;
