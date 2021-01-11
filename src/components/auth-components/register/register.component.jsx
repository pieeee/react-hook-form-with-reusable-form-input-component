import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import "./register.styles.scss";

// importing reusable form-input component
import FormInput from "../../reusable-components/form-input/form-input.component";

// import reusable button
import CustomButton from "../../reusable-components/custom-button/custom-button.component";

const RegisterForm = () => {
  // extracting all the methods from useForm()
  const methods = useForm();

  // form submit and previewing form data after submitting
  // check console to see the form data
  const onSubmit = (formData) => console.log({ registerData: formData });

  return (
    <div className="register-form">
      <h2>Register Account</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* To use the form-input component just pass three
          values: input type, name of the input and the label
          */}
          <FormInput type="text" name="firstName" label="First Name" />
          <FormInput type="text" name="lastName" label="Last Name" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
