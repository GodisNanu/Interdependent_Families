import { useState, useCallback } from "react";

function validateBasicEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.length < 1) {
    return "Field is required";
  } else if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  return "";
}

function validateBasicPassword(password) {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (password.length < 1) {
    return "Field is required";
  } else if (!passwordRegex.test(password)) {
    return "Password must contain atlease 8 characters, 1 number, 1 letter, and 1 special character";
  }
  return "";
}

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = e.target.validationMessage;

    if (name === "email") {
      const customError = validateBasicEmail(value);
      if (customError) {
        errorMessage = customError;
      }
    }

    if (name === "password") {
      const customError = validateBasicPassword(value);
      if (customError) {
        errorMessage = customError;
      }
    }

    setValues({ ...values, [name]: value });
    const newErrors = { ...errors, [name]: errorMessage };
    setErrors(newErrors);

    const form = e.target.closest("form");
    const isNativeValid = form ? form.checkValidity() : true;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(isNativeValid && hasErrors);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
