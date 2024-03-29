import React from 'react'
import './Styling/contact.css'



function Contact() {
  return (
    <div className='body'>
         <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button className='btn' type="submit">Send</button>
      </form>
    </div>

    </div>
 
  )
}

export default Contact