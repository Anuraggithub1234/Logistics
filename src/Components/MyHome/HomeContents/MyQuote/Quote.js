import React from 'react';
import './Quote.scss';

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-image">
        <img src="/images/QuoteImg.png" alt="Customer Support" />
      </div>
      <div className="quote-form">
        <h3>QUICK QUOTE</h3>
        <form className="row g-2">

          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          {/* 
          <div className="row mb-3" style={{marginTop: "1.5rem"}}>
            <label type="text" for="inputEmail3" className="col-sm-2 col-form-label form-label" style={{fontWeight: "bold"}}>Shipment Type*</label>
            <div className="col-sm-3">
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
            </div>
          </div> */}


          <div className="col-md-3">
            <label htmlFor="inputEmail4" className="form-label" style={{ fontWeight: "bold" }}>Shipment Type*</label>
            <div className="col">
              <select id="inputState" className="form-select">
                <option defaultValue>Less Than TruckLoad</option>
                <option>Full TruckLoad</option>
                <option>Expedited</option>
              </select>
            </div>
          </div>

          <div className="col-md-5"  style={{ width: "80%" }}>
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <textarea placeholder='Message' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="col-12" style={{ marginTop: "3vh" }}>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Quote;
