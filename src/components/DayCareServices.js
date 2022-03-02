import React from "react";

const DayCareServices = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="pickupDate">Pick Up</label>
          <input
            type="date"
            className="form-control"
            id="pickupDate"
            placeholder="pick up date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropDate">Drop</label>
          <input
            type="date"
            className="form-control"
            id="dropDate"
            placeholder="drop date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickupTime">Pick Up Time</label>
          <input
            type="time"
            className="form-control"
            id="pickupTime"
            placeholder="pick up time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropTime">Drop Time</label>
          <input
            type="time"
            className="form-control"
            id="dropTime"
            placeholder="drop time"
          />
        </div>
        <div className="htmlForm-check">
          <input type="checkbox" className="htmlForm-check-input" id="Isolation" />
          <label className="htmlForm-check-label" htmlFor="feeding">
            Isolation
          </label>
        </div>
        <div className="htmlForm-check">
          <input type="checkbox" className="htmlForm-check-input" id="Feeding" />
          <label className="htmlForm-check-label" htmlFor="feeding">
            Feeding
          </label>
        </div>

        <div className="htmlForm-check">
          <input type="checkbox" className="htmlForm-check-input" id="isolation" />
          <label className="htmlForm-check-label" htmlFor="feeding">
            Isolation
          </label>
        </div>
        <div className="htmlForm-check">
          <input type="checkbox" className="htmlForm-check-input" id="grooming" />
          <label className="htmlForm-check-label" htmlFor="feeding">
            Grooming
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Your address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount"> Total Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="total amount"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pay Now :)
        </button>
      </form>
    </div>
  );
};

export default DayCareServices;
