import { useState } from "react";
import validator from "validator";

import errorIcon from "../images/icon-error.svg";
import scss from "../styles/FormInput.module.scss";

function FormInput({ placeholder, type, name, onUpdate }) {
  const [inputError, setInputError] = useState(null);

  function validateInput(e) {
    if (validator.isEmpty(e.target.value)) {
      setInputError(`${placeholder} cannot be empty`);
      onUpdate(name, false);
    } else if (type === "email" && !validator.isEmail(e.target.value)) {
      setInputError("Looks like this is not an email");
      onUpdate("email", false);
    } else {
      setInputError(null);
      onUpdate(name, true);
    }
  }

  return (
    <div>
      <div className={inputError ? scss["wrapper--error"] : scss.input_wrapper}>
        <input
          placeholder={placeholder}
          className={scss.input_field}
          type={type ? type : "text"}
          onBlur={validateInput}
        />
        {inputError && <img src={errorIcon} alt="" />}
      </div>
      {inputError && <p className={scss.error_message}>{inputError}</p>}
    </div>
  );
}

export default FormInput;
