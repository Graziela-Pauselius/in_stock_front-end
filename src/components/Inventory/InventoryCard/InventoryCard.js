import { Link } from "react-router-dom";

import "./InventoryCard.scss";
import ArrowIcon from "../../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";

const InventoryCard = ({ item }) => {
	return (
		<div className="row__section">
			<div className="row__content">
				<div className="row__container-right">
					<div className="row__box">
						<span className="row__label row__hide">INVENTORY ITEM</span>
						<div className="row__link-container">
							<Link to={`/inventory/${item.id}`} className="row__link">
								<span className="row__item-link">{item.itemName}</span>{" "}
								<img src={ArrowIcon} alt="" />
							</Link>
						</div>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">CATEGOTY</span>
						<p className="row__item">{item.category}</p>
					</div>
				</div>

				<div className="row__container-left">
					<div className="row__box">
						<span className="row__label row__hide">STATUS</span>
						<p
							className={`${
								item.status === "In Stock"
									? "row__status-green"
									: "row__status-red"
							}`}
						>
							{item.status.toUpperCase()}
						</p>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">QTY</span>
						<p className="row__item">{item.quantity}</p>
					</div>
					<div className="row__box">
						<span className="row__label row__hide">WAREHOUSE</span>
						<p className="row__item">{item.warehouseName}</p>
					</div>
				</div>
			</div>
			<div className="row__btn-container">
				<img className="row__btn-icon" src={DeleteIcon} alt="" />
				<img className="row__btn-icon" src={EditIcon} alt="" />
			</div>
		</div>
	);
};

export default InventoryCard;
