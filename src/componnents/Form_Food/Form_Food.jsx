import './Form_Food.css'
import React, { useState } from 'react';
import add_food from './../../images/add-circle.svg'

const Form_Food = () => {
  const [imageFood, setImageFood] = useState(null);
  const [titleFood, setTitleFood] = useState('');
  const [descriptionFood, setDescriptionFood] = useState('');
  const [selectedFood, setSelectedFood] = useState('');

  const [focused, setFocused] = useState(false);
  const [focusedDescription, setFocusedDescription] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleFocusDescription = () => {
    setFocusedDescription(true);
  };

  const handleImageFood = (e) => {
    setImageFood(e.target.files[0]);
  }

  const handleTitleFood = (e) => {
    setTitleFood(e.target.value);
  }

  const handleDescriptionFood = (e) => {
    setDescriptionFood(e.target.value);
  }

  const handleSelectFood = (e) => {
    setSelectedFood(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit} className='HJ_form'>
      <div className='HJ_form-part1'>
        <div className='HJ_content'>
          <input onChange={handleImageFood} value={imageFood} className='HJ_form-image HJ_space_top' required />
          <img src={add_food} alt="new food" className='HJ_new' />
        </div>
      </div>
      <div className='HJ_form-part2'>
        <div className='HJ_inputBox'>
          <input type="text" value={titleFood} required onChange={handleTitleFood} className='HJ_title' />
          <span>Title</span>
        </div>
        <div className='RH_form_food_select'>
          <label className={focused ? 'focused' : ''}>Category</label>
          <select name="categories" onFocus={handleFocus} value={selectedFood} onChange={handleSelectFood} className='HJ_select' required>
            <option></option>
          </select>
        </div>

      </div>

      <div className='RH_form_food_description'>
        <label className={focusedDescription ? 'focused' : ''}>Description</label>
        <input type="text" value={descriptionFood} onFocus={handleFocusDescription} onChange={handleDescriptionFood} className='HJ_description' />
      </div>

        <div className='RH_form_lastSection'>
            <div className="RH-space-between">
              <span>Image size :</span>
              <div><label  className="m-3"> * 1 </label></div>
              <div><label  className="m-3 hidden"> * 3 </label></div>
            </div>
            <div className='HJ_form_buttons'>
              <button className='btn_cancel'>Cancel</button>
              <button type='submit' className='HJ_btn'>Add Food</button>
          </div>
        </div>
  
    </form>



  )
}

export default Form_Food