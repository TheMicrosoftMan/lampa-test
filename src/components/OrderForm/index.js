import React from "react";

export const OrderForm = () => {
  return (
    <form className="OrderForm">
      <label className="OrderForm__item">
        Name
        <input
          type="text"
          name="name"
          className="OrderForm__item_input"
          required
          placeholder="Name"
          aria-label="Name"
        />
      </label>
      <label className="OrderForm__item">
        Surname
        <input
          type="text"
          name="surname"
          className="OrderForm__item_input"
          required
          placeholder="Surname"
          aria-label="Surname"
        />
      </label>
      <label className="OrderForm__item">
        Address
        <input
          type="text"
          name="address"
          className="OrderForm__item_input"
          required
          placeholder="Address"
          aria-label="Address"
        />
      </label>
      <label className="OrderForm__item">
        Phone
        <input
          type="text"
          name="phone"
          className="OrderForm__item_input"
          required
          placeholder="Phone"
          aria-label="Phone"
        />
      </label>
      <button type="submit" className="OrderForm__submit">
        Order
      </button>
    </form>
  );
};
