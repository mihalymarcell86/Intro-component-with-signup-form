import { useState } from "react";
import FormInput from "./FormInput";

import scss from "../styles/RegistrationForm.module.scss";

function RegistrationForm() {
  const defaultState = {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  };

  const [inputIsValid, setInputisValid] = useState(defaultState);

  const formIsValid = Object.values(inputIsValid).every((value) => value);

  function updateValidity(name, validity) {
    setInputisValid((prev) => ({ ...prev, [name]: validity }));
    console.log(inputIsValid);
    console.log(formIsValid);
  }

  return (
    <form noValidate className={scss.form}>
      <FormInput
        placeholder="First Name"
        name="firstname"
        onUpdate={updateValidity}
      />
      <FormInput
        placeholder="Last Name"
        name="lastname"
        onUpdate={updateValidity}
      />
      <FormInput
        placeholder="Email Address"
        type="email"
        name="email"
        onUpdate={updateValidity}
      />
      <FormInput
        placeholder="Password"
        type="password"
        name="password"
        onUpdate={updateValidity}
      />
      <button
        className={scss.submit_button}
        disabled={!formIsValid}
        type="submit"
      >
        Claim your free trial
      </button>
    </form>
  );
}

export default RegistrationForm;
