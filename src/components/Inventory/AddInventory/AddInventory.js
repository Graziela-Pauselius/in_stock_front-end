//add new inventory item

import React from 'react'
import './AddInventory.scss'

function AddInventory() {

  let validater = (classToQuery, classToAddIfError) => {
    var itemValue = document.querySelector(classToQuery).value;
    var itemSelected = document.querySelector(classToQuery);
    var errorItemSelected = document.querySelector(classToQuery + "-error-message");
    if (itemValue === "") {
      itemSelected.classList.add(classToAddIfError)
      errorItemSelected.style.display = "flex";
      return
    } else {
      if (itemSelected.classList.contains(classToAddIfError)) {
        itemSelected.classList.remove(classToAddIfError)
        errorItemSelected.style.display = "none";
      }
    }
  }

  let submitHandler = () => {
    validater(".item-details__item-name-input", "item-details__item-name-input--error")
    validater(".item-details__item-description-input", "item-details__item-description-input--error")
    validater(".item-details__item-category-input", "item-details__item-category-input--error")
    validater(".item-availability__quantity-input", "item-availability__quantity-input--error")
    validater(".item-availability__item-warehouse-input", "item-availability__item-warehouse-input--error")

    //CALL THE SERVER HERE 

  }


  return (
    <>
      <section className="add-item-section">
        <div className="add-item-section__header">
          <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="add-item-section__header-icon" alt="" />
          <div className="add-item-section__title">Add New Inventory Item</div>
        </div>
        <form className='add-item-form' >
          <div className="details-and-availability">
            <div className="item-details">
              <div className="item-details__subhead">
                Item Details
              </div>
              <label htmlFor="itemSelected" className='item-details__item-name-label'>Item Name</label>
              <input type="text" name="itemSelected" className="item-details__item-name-input" placeholder='Item Name' />
              <div className="item-details__item-name-input-error-message">
                <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                <p>This field is required</p>
              </div>
              <label htmlFor="itemDesc" className='item-details__item-desc-label'>Description</label>
              <textarea className="item-details__item-description-input" name="itemDesc" placeholder='Please enter a brief item description...'></textarea>
              <div className="item-details__item-description-input-error-message">
                <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                <p>This field is required</p>
              </div>
              <label htmlFor="itemCategory" className='item-details__item-category-label'>Category</label>
              <select name="itemCategory" className="item-details__item-category-input">
                <option value="" defaultValue hidden>Please select</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
              </select>
              <div className="item-details__item-category-input-error-message">
                <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                <p>This field is required</p>
              </div>
            </div>
            <div className="item-availability">
              <div className="item-availability__subhead">
                Item Availability
              </div>
              <label htmlFor="itemStatus" className='item-availability__status-label'>Status</label>
              <div className="item-availability__radio-buttons">
                <div className="item-availability-radio-button">
                  <input type="radio" className="item-status__in-stock" name="item-status" value="in stock" defaultChecked />
                  <label htmlFor="item-status">In stock</label>
                </div>
                <div className="item-availability__radio-button">
                  <input type="radio" className="item-status__out-stock" name="item-status" value="Out of stock" />
                  <label htmlFor="item-status">Out of stock</label>
                </div>
              </div>

              <label htmlFor="quantity" className='item-availability__quantity-label'>Quantity</label>
              <input type="text" name="quantity" className="item-availability__quantity-input" placeholder='0' />
              <div className="item-availability__quantity-input-error-message">
                <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                <p>This field is required</p>
              </div>
              <label htmlFor="itemWarehouse" className='item-availability__warehouse-label'>Warehouse</label>
              <select name="itemWarehouse" className="item-availability__item-warehouse-input">
                <option value="" defaultValue hidden>Please select</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Washington">Washington</option>
                <option value="Jersey">Jersey</option>
                <option value="SanFran">San Fran</option>
                <option value="Santa Monica">Santa Monica</option>
                <option value="Seattle">Seattle</option>
                <option value="Miami">Miami</option>
                <option value="Boston">Boston</option>
              </select>
              <div className="item-availability__item-warehouse-input-error-message">
                <img src={require('../../../assets/icons/error-24px.svg').default} className="item-details__error-icon" alt="" />
                <p>This field is required</p>
              </div>
            </div>
          </div>
          <div className="add-item-section__buttons">
            <button type='button' className='add-item-section__cancel-button'>Cancel</button>
            <button type='button' className='add-item-section__add-button' onClick={submitHandler}>
              + Add Item
            </button>
          </div>
        </form>
      </section>
    </>)
}

export default AddInventory