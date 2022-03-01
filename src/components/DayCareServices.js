import React from "react";

const DayCareServices = () => {
  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label for="pickupDate">Pick Up</label>
          <input
            type="date"
            class="form-control"
            id="pickupDate"
            placeholder="pick up date"
          />
        </div>
        <div class="form-group">
          <label for="dropDate">Drop</label>
          <input
            type="date"
            class="form-control"
            id="dropDate"
            placeholder="drop date"
          />
        </div>
        <div class="form-group">
          <label for="pickupTime">Pick Up Time</label>
          <input
            type="time"
            class="form-control"
            id="pickupTime"
            placeholder="pick up time"
          />
        </div>
        <div class="form-group">
          <label for="dropTime">Drop Time</label>
          <input
            type="time"
            class="form-control"
            id="dropTime"
            placeholder="drop time"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Isolation" />
          <label class="form-check-label" for="feeding">
            Isolation
          </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Feeding" />
          <label class="form-check-label" for="feeding">
            Feeding
          </label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="isolation" />
          <label class="form-check-label" for="feeding">
            Isolation
          </label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="grooming" />
          <label class="form-check-label" for="feeding">
            Grooming
          </label>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Your address"
          />
        </div>
        <div class="form-group">
          <label for="amount"> Total Amount</label>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="total amount"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Pay Now :)
        </button>
      </form>
    </div>
  );
};

export default DayCareServices;
