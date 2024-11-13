import React, { useState } from 'react';
import './App.css'; // Add your CSS file here for styling

const Form = () => {
  const [formData, setFormData] = useState({
    fromStation: '',
    toStation: '',
    journeyDate: '',
    travelClass: 'sleeper',
    passengerName: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    alert('Ticket booked successfully!');
  };

  return (
    <div className="booking-form">
      <h2>Railway Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Journey Details */}
        <div className="form-group">
          <label>From:</label>
          <input 
            type="text" 
            name="fromStation" 
            value={formData.fromStation} 
            onChange={handleChange} 
            placeholder="Starting station" 
            required 
          />
        </div>

        <div className="form-group">
          <label>To:</label>
          <input 
            type="text" 
            name="toStation" 
            value={formData.toStation} 
            onChange={handleChange} 
            placeholder="Destination station" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Journey Date:</label>
          <input 
            type="date" 
            name="journeyDate" 
            value={formData.journeyDate} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Class:</label>
          <select name="travelClass" value={formData.travelClass} onChange={handleChange}>
            <option value="sleeper">Sleeper</option>
            <option value="3AC">3rd AC</option>
            <option value="2AC">2nd AC</option>
            <option value="1AC">1st AC</option>
          </select>
        </div>

        {/* Passenger Details */}
        <div className="form-group">
          <label>Passenger Name:</label>
          <input 
            type="text" 
            name="passengerName" 
            value={formData.passengerName} 
            onChange={handleChange} 
            placeholder="Full name" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            min="1" max="100" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={formData.gender === 'male'} 
                onChange={handleChange} 
                required 
              />
              Male
            </label>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                checked={formData.gender === 'female'} 
                onChange={handleChange} 
                required 
              />
              Female
            </label>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="other" 
                checked={formData.gender === 'other'} 
                onChange={handleChange} 
                required 
              />
              Other
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="form-group">
          <label>Contact Number:</label>
          <input 
            type="tel" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            placeholder="Contact number" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email address" 
            required 
          />
        </div>

        {/* Payment Details */}
        <div className="form-group">
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="net-banking">Net Banking</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Book Ticket</button>
      </form>
    </div>
  );
};

export default Form;
