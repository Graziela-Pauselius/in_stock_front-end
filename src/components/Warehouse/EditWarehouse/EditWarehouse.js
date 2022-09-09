import React from "react";
import { useState } from "react";
//eslint-disable-next-line
import axios from "axios";
import "./EditWarehouse.scss";
import backArrow from "../../../assets/icons/arrow_back-24px.svg";
import error from "../../../assets/icons/error-24px.svg";
import TextInput from "./TextInput";

function EditWarehouse() {
  const warehouseData = {
    id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    name: "Washington",
    address: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contact: {
      name: "Greame Lyon",
      position: "Warehouse Manager",
      phone: "+1 (646) 123-1234",
      email: "glyon@instock.com",
    },
  };
  const [warehouse, setWarehouse] = useState(warehouseData);
  const [warehouseNameValid, setWarehouseNameValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [contactNameValid, setContactNameValid] = useState(true);
  const [positionValid, setPositionValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleChangeWarehouse = (event) => {
    const { name, value } = event.target;
    setWarehouse({ ...warehouse, [name]: value });
  };
  const handleChangeContact = (event) => {
    const { name, value } = event.target;
    setWarehouse((current) => {
      const contact = { ...current.contact };
      contact[name] = value;
      return { ...current, contact };
    });
  };
  const isFormValid = () => {
    if (
      warehouse.name &&
      warehouse.address &&
      warehouse.city &&
      warehouse.country &&
      warehouse.contact.name &&
      warehouse.contact.position &&
      warehouse.contact.phone &&
      warehouse.contact.email
    ) {
      return true;
    } else {
      if (!warehouse.name) {
        setWarehouseNameValid(false);
      }
      if (!warehouse.address) {
        setAddressValid(false);
      }
      if (!warehouse.city) {
        setCityValid(false);
      }
      if (!warehouse.country) {
        setCountryValid(false);
      }
      if (!warehouse.contact.name) {
        setContactNameValid(false);
      }
      if (!warehouse.contact.position) {
        setPositionValid(false);
      }
      if (!warehouse.contact.phone) {
        setPhoneValid(false);
      }
      if (!warehouse.contact.email) {
        setEmailValid(false);
      }
      return false;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
  };

  return (
    <div className="component">
      <div className="component__header">
        <img
          className="component__header-back"
          src={backArrow}
          alt="Back Arrow"
        />
        <h1 className="component__title">Edit Warehouse</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container">
          <h2 className="form__subtitle">Warehouse Details</h2>
          <TextInput
            name={"name"}
            label={"Warehouse Name"}
            value={warehouse.name}
            isValid={warehouseNameValid}
            setValid={setWarehouseNameValid}
            onChange={handleChangeWarehouse}
          />
          <TextInput
            name={"address"}
            label={"Street Address"}
            value={warehouse.address}
            isValid={addressValid}
            setValid={setAddressValid}
            onChange={handleChangeWarehouse}
          />
          <TextInput
            name={"city"}
            label={"City"}
            value={warehouse.city}
            isValid={cityValid}
            setValid={setCityValid}
            onChange={handleChangeWarehouse}
          />
          <TextInput
            name={"country"}
            label={"Country"}
            value={warehouse.country}
            isValid={countryValid}
            setValid={setCountryValid}
            onChange={handleChangeWarehouse}
          />
        </div>
        <div className="form__container form__container--contacts">
          <h2 className="form__subtitle">Contact Details</h2>
          <TextInput
            name={"name"}
            label={"Contact Name"}
            value={warehouse.contact.name}
            isValid={contactNameValid}
            setValid={setContactNameValid}
            onChange={handleChangeContact}
          />
          <TextInput
            name={"position"}
            label={"Position"}
            value={warehouse.contact.position}
            isValid={positionValid}
            setValid={setPositionValid}
            onChange={handleChangeContact}
          />
          <TextInput
            name={"phone"}
            label={"Phone Number"}
            value={warehouse.contact.phone}
            isValid={phoneValid}
            setValid={setPhoneValid}
            onChange={handleChangeContact}
          />
          <TextInput
            name={"email"}
            label={"Email"}
            value={warehouse.contact.email}
            isValid={emailValid}
            setValid={setEmailValid}
            onChange={handleChangeContact}
          />
        </div>
      </form>
      <div className="button__container">
        <button className="button button--cancel"> Cancel</button>
        <button className="button button--save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditWarehouse;
