import "./Checkout.css";
import { useRef, useState } from "react";
const isEmpty = (value) => value.trim() === "";
const notPostalValid = (value) => value.trim().length !== 6;
const Emailvalid = (value) => value.includes("@");
const Checkout = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    street: true,
    postal: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = Emailvalid(enteredEmail);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !notPostalValid(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    setFormInputValid({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  const nameControlClasses = `control ${formInputValid.name ? "" : "invalid"}`;
  const emailControlClasses = `control ${
    formInputValid.email ? "" : "invalid"
  }`;
  const streetControlClasses = `control ${
    formInputValid.street ? "" : "invalid"
  }`;
  const postalControlClasses = `control ${
    formInputValid.postal ? "" : "invalid"
  }`;
  const cityControlClasses = `control ${formInputValid.city ? "" : "invalid"}`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" ref={nameInputRef} />
        {!formInputValid.name && (
          <p style={{ color: "red" }}>Please enter valid name!</p>
        )}
      </div>
      <div className={emailControlClasses}>
        <label htmlFor="mail">Email Adress</label>
        <input id="mail" type="text" ref={emailInputRef} />
        {!formInputValid.email && (
          <p style={{ color: "red" }}>Please enter valid email!</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
        {!formInputValid.street && (
          <p style={{ color: "red" }}>Please enter valid street!</p>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal code</label>
        <input id="postal" type="text" ref={postalInputRef} />
        {!formInputValid.postal && (
          <p style={{ color: "red" }}>
            Please enter valid Postal Address(6 digit)
          </p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
        {!formInputValid.city && (
          <p style={{ color: "red" }}>Please enter valid city name!</p>
        )}
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
