import React from 'react'
import { Link } from "react-router-dom";

import "./WarehouseCard.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

function Warehouses({warehouse}) {
	return (
		<div className='warehouse__sect'>
			<div className='mobile__view'>
		<div className="row__section">
			<div className="row__content5">
				<div className="row__container5-right">
					<div className="row__box">
						<span className="row__label row__hide">WAREHOUSE</span>
						<div className="row__link-container">
              <Link to={`/warehouses/${warehouse.id}`} className="warehouse__card__link">
								<span className="row__link">{warehouse.name}<img src={ArrowIcon} alt="" /></span>{" "}
							</Link>
						</div>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">ADDRESS</span>
						<p className="row__item">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
					</div>
				</div>

				<div className="row__container5-left">
					<div className="row__box">
						<span className="row__label row__hide">CONTACT NAME</span>
						<p className="row__item">{warehouse.contact.name}</p>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">CONTACT INFORMATION</span>
						<p className="row__item">{warehouse.contact.phone}<br></br>{warehouse.contact.email}</p>
					</div>
				</div>
			</div>
			<div className="row__btn-container">
				<img className="row__btn-icon" src={DeleteIcon} alt="" />
				<img className="row__btn-icon" src={EditIcon} alt="" />
			</div>
		</div>
		</div>
		<div className='tablet__plus__view'>
		<div className="row__section">
			<div className="row__content5">
					<div className="row__box5">
						<span className="row__label row__hide">WAREHOUSE</span>
						<div className="row__link-container">
              <Link to={`/warehouses/${warehouse.id}`} className="warehouse__card__link">
								<span className="row__link">{warehouse.name}<img src={ArrowIcon} alt="" /></span>{" "}
							</Link>
						</div>
					</div>
					<div className="row__box5">
						<span className="row__label row__hide">ADDRESS</span>
						<p className="row__item">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
					</div>

					<div className="row__box5">
						<span className="row__label row__hide">CONTACT NAME</span>
						<p className="row__item">{warehouse.contact.name}</p>
					</div>
					<div className="row__box5">
						<span className="row__label row__hide">CONTACT INFORMATION</span>
						<p className="row__item">{warehouse.contact.phone}<br></br>{warehouse.contact.email}</p>
					</div>
			</div>
			<div className="row__btn-container">
				<img className="row__btn-icon" src={DeleteIcon} alt="" />
				<img className="row__btn-icon" src={EditIcon} alt="" />
			</div>
		</div>

		</div>
		</div>
	);
};

export default Warehouses