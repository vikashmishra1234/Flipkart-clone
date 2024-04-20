import React, { useEffect, useState } from 'react';

const AddressForm = ({ onSubmit,address,getLocation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  useEffect(()=>{
      if(address){
        console.log(address)
        setFormData({city:address.city,state:address.state,postalCode:address.postcode,country:address.country})
      }
  },[address])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <button className='btn btn-success' onClick={()=>getLocation()}>use my location</button>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="form-control"
         
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          className="form-control"
        
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine2" className="form-label">Address Line 2 (Optional)</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3 row">
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="postalCode" className="form-label">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  );
};

export default AddressForm;
