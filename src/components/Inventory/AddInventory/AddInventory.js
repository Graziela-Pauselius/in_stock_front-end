import React, { useEffect } from 'react'
import './AddInventory.scss'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react'

function AddInventory() {
  const navigate = useNavigate();
  let param = useParams()
  let [inventoryName, setInventoryName] = useState("")
  let [inventoryDescription, setInventoryDescription] = useState("")
  let [inventoryQuantity, setInventoryQuantity] = useState("")
  let [inventoryCategory, setInventoryCategory] = useState("")
  let [inventoryWarehouse, setInventoryWarehouse] = useState("")
  let [inventoryStatus, setInventoryStatus] = useState("In Stock")
  let [inventoryId, setInventoryId] = useState("")

  // controlled component functions
  const onNameChange = event => setInventoryName(event.target.value)
  const onDescriptionChange = event => setInventoryDescription(event.target.value)
  const onQuantityChange = event => setInventoryQuantity(event.target.value)
  const onCategoryChange = event => setInventoryCategory(event.target.value)
  const onWarehouseChange = event => setInventoryWarehouse(event.target.value)

  // on load check if this is an edit item, if so fill the fields with the response from the server
  useEffect(() => {
    if (Object.keys(param).length !== 0) {
      axios.get(`http://localhost:8080/inventory/${param.itemId}`).then(response => {
        let inventoryItem = response.data.inventoryItem
        setInventoryName(inventoryItem.itemName)
        setInventoryDescription(inventoryItem.description)
        setInventoryQuantity(inventoryItem.quantity)
        setInventoryCategory(inventoryItem.category)
        setInventoryWarehouse(inventoryItem.warehouseName)
        setInventoryStatus(inventoryItem.status)
        setInventoryId(inventoryItem.id)
      })
    }
  }, [])

  // validate function, check the fields and display an error message if needed
  let validater = (classToQuery, classToAddIfError) => {
    var itemValue = document.querySelector(classToQuery).value;
    var itemSelected = document.querySelector(classToQuery);
    var errorItemSelected = document.querySelector(classToQuery + "-error-message");
    if (itemValue === "" || itemValue === "Please select") {
      itemSelected.classList.add(classToAddIfError)
      errorItemSelected.style.display = "flex";
      return false
    } else {
      if (itemSelected.classList.contains(classToAddIfError)) {
        itemSelected.classList.remove(classToAddIfError)
        errorItemSelected.style.display = "none";
        return true
      }
    }
  }

  // Check if all form fields are valid and if so create an object, send it to the server and go to previous page
  let submitHandler = () => {
    if (validater(".item-details__item-name-input", "item-details__item-name-input--error") === false) return
    if (validater(".item-details__item-description-input", "item-details__item-description-input--error") === false) return
    if (validater(".item-details__item-category-input", "item-details__item-category-input--error") === false) return
    if (validater(".item-availability__quantity-input", "item-availability__quantity-input--error") === false) return
    if (validater(".item-availability__item-warehouse-input", "item-availability__item-warehouse-input--error") === false) return
    let objToSend = {
      warehouseName: inventoryWarehouse,
      itemName: inventoryName,
      description: inventoryDescription,
      category: inventoryCategory,
      status: inventoryStatus,
      quantity: inventoryQuantity,
      id: inventoryId
    }
    if (Object.keys(param).length > 0) {
      axios.put(`${process.env.REACT_APP_API_URL}/inventory/`, objToSend).then(() => {
        navigate(-1)
      }
      )
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/inventory/`, objToSend).then(() => {
        navigate(-1)
        return
      })
    }
  }

  return (
    <>
      <div className="add-item-section__container">
        <section className="add-item-section">
          <div className="add-item-section__header">
            <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="add-item-section__header-icon" alt="" onClick={() => { navigate(-1) }} />
            <div className="add-item-section__title">{Object.keys(param).length === 0 ? "Add New Inventory" : "Edit Inventory Item"}</div>
          </div>
          <form className='add-item-form' >
            <div className="details-and-availability">
              <div className="item-details">
                <div className="item-details__subhead">
                  Item Details
                </div>
                <label htmlFor="itemSelected" className='item-details__item-name-label'>Item Name</label>
                <input type="text" name="itemSelected" className="item-details__item-name-input" value={inventoryName} placeholder='Item Name' onChange={onNameChange} />
                <div className="item-details__item-name-input-error-message">
                  <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                  <span>This field is required</span>
                </div>
                <label htmlFor="itemDesc" className='item-details__item-desc-label'>Description</label>
                <textarea className="item-details__item-description-input" name="itemDesc" value={inventoryDescription} onChange={onDescriptionChange} placeholder='Please enter a brief item description...'></textarea>
                <div className="item-details__item-description-input-error-message">
                  <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                  <span> This field is required</span>
                </div>
                <label htmlFor="itemCategory" className='item-details__item-category-label'>Category</label>
                <select name="itemCategory" value={inventoryCategory} className="item-details__item-category-input" onChange={onCategoryChange}>
                  <option defaultValue hidden>Please select</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Health">Health</option>
                </select>
                <div className="item-details__item-category-input-error-message">
                  <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                  <span>This field is required</span>
                </div>
              </div>
              <div className="item-availability">
                <div className="item-availability__subhead">
                  Item Availability
                </div>
                <label htmlFor="itemStatus" className='item-availability__status-label'>Status</label>
                <div className="item-availability__radio-buttons">
                  <div className="item-availability-radio-button">
                    <input type="radio" className="item-status__in-stock" name="item-status" value="in stock" onClick={() => setInventoryStatus("In Stock")} checked={inventoryStatus === 'In Stock'} onChange={() => { }} />
                    <label htmlFor="item-status">In stock</label>
                  </div>
                  <div className="item-availability__radio-button">
                    <input type="radio" className="item-status__out-stock" name="item-status" value="Out of stock" onClick={() => setInventoryStatus("Out of Stock")} checked={inventoryStatus === 'Out of Stock'} onChange={() => { }} />
                    <label htmlFor="item-status">Out of stock</label>
                  </div>
                </div>
                <label htmlFor="quantity" className='item-availability__quantity-label'>Quantity</label>
                <input type="text" name="quantity" value={inventoryQuantity} onChange={onQuantityChange} className="item-availability__quantity-input" placeholder='0' />
                <div className="item-availability__quantity-input-error-message">
                  <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                  <span>This field is required</span>
                </div>
                <label htmlFor="itemWarehouse" className='item-availability__warehouse-label'>Warehouse</label>
                <select name="itemWarehouse" onChange={onWarehouseChange} value={inventoryWarehouse} className="item-availability__item-warehouse-input">
                  <option value="" defaultValue hidden>Please select</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Washington">Washington</option>
                  <option value="Jersey">Jersey</option>
                  <option value="San Fran">San Fran</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Miami">Miami</option>
                  <option value="Boston">Boston</option>
                </select>
                <div className="item-availability__item-warehouse-input-error-message">
                  <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                  <span>This field is required</span>
                </div>
              </div>
            </div>
            <div className="add-item-section__buttons">
              <button type='button' className='add-item-section__cancel-button' onClick={() => { navigate(-1) }}>Cancel</button>
              <button type='button' className='add-item-section__add-button' onClick={submitHandler}>
                {Object.keys(param).length === 0 ? "+ Add Item" : "Save"}
              </button>
            </div>
          </form>
        </section>
        <div className="add-item-section__header-background"></div>s
      </div>
    </>)
}

export default AddInventory