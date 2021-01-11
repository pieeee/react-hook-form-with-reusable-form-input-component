import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import "./sign-in.styles.scss";

// importing reusable form-input component
import FormInput from "../../reusable-components/form-input/form-input.component";

// import reusable button
import CustomButton from "../../reusable-components/custom-button/custom-button.component";

const SignInForm = () => {
  // extracting all the methods from useForm()
  const methods = useForm();

  // form submit and previewing form data after submitting
  // check console to see the form data
  const onSubmit = (formData) => console.log({ signInData: formData });

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* To use the form-input component just pass three
          values: input type, name of the input and the label
          */}
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignInForm;
