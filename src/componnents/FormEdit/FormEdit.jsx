import React, { useState } from 'react';
import  new_article from './../../images/add-circle.svg'
import calender from './../../images/calendar.svg'
import gallery_add from './../../images/gallery-add.svg'
import { Link } from 'react-router-dom';
const FormEdit = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const [focused, setFocused] = useState(false);
    
  const handleFocus = () => {
    setFocused(true);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit} className='HJ_form'>
      <div className='HJ_form-part1'>
        <label className='HJ_label'>Project Cover</label>
        <div className='HJ_content'>
            <input  onChange={handleImageChange} value={image}  className='HJ_form-image' required/>    
            <img src={new_article} alt="new article" className='HJ_new'/>  
        </div>
      </div>

      <div className='HJ_form-part2'>
        <div className='HJ_inputBox'>
          <input type="text" value={title} required onChange={handleTitleChange}   className='HJ_title'  />
          <span>Title</span>
        </div>

        <input  value={selectedDate} onChange={handleDateChange} placeholder='Date: 2023/5/15'  className='HJ_date' />
        <img src={calender} className='HJ_calender'  alt='calender'/>
      </div>

      <div className='HJ_form_select'>
      <label className={focused ? 'focused' : ''}>Tags</label>
        <select name="tags"   onFocus={handleFocus}  value={selectedOption} onChange={handleSelectChange} className='HJ_select' required>
          <option></option>
          <option value="mountain_breeze"> Mountain_Breeze</option>
          <option value="tourism"> Tourism</option> 
        </select>  
      </div>
      
      <div className='HJ_form_description'>
        <label>Description</label>
        <input type="text" value={description}   onChange={handleDescriptionChange} className='HJ_description' />
      </div>

      <div className='HJ_form_link'>
        <img src={gallery_add} alt="gallery add"/> 
        <Link to=''>Add Photo/video</Link>
          
      </div>
      <div className='HJ_form_buttons'>
        <button className='btn_cancel'>Cancel</button> 
        <button  type='submit' className='HJ_btn'>Add Article</button> 
      </div>
    
    </form>
  );
}






export default FormEdit