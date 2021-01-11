// form-input component is the reusable component we will be using for the entire app
// This component is only valid for the input type component

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import "./form-input.styles.scss"

const FormInput = ({ label, name, type }) => {
  const { register, getValues } = useFormContext();

  const [inputValuesLength, setInputValue] = useState();

  return (
    <div className="group">
      <input
        className="form-input"
        ref={register({ required: true })}
        name={name}
        type={type}
        onChange={() => setInputValue(getValues(name).length)}
      />
      {label ? (
        <label
          className={`${inputValuesLength ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
