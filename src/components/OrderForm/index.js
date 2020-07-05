import React from "react";
import { Field, reduxForm } from "redux-form";

const OrderForm = ({ handleSubmit }) => {
  return (
    <form className="OrderForm" onSubmit={handleSubmit}>
      <label className="OrderForm__item">
        Name
        <Field
          component="input"
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
        <Field
          component="input"
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
        <Field
          component="input"
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
        <Field
          component="input"
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

const reduxOrderForm = reduxForm({
  form: "order",
})(OrderForm);

export { reduxOrderForm as OrderForm };
