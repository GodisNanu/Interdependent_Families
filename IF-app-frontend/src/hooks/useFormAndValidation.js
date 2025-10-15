import { useState, useCallback } from "react";

function validateBasicEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.length < 1) {
    return "Field is required";
  } else if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
}

function validateBasicPassword(password) {
  const passwordRegex = new RegExp(
    // Positive lookaheads (enforce requirements)
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])" +
      // Match 8 or more characters from the *full* allowed set
      "[A-Za-z\\d@$!%*#?&\\.,\\-_+=()\\s]{8,}$"
  );
  if (password.length < 1) {
    return "Field is required";
  } else if (!passwordRegex.test(password)) {
    return "Password must contain atlease 8 characters, 1 number, 1 letter, and 1 special character";
  }
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
        e.target.setCustomValidity(customError);
      } else {
        e.target.setCustomValidity("");
      }
    }

    if (name === "password") {
      const customError = validateBasicPassword(value);
      if (customError) {
        errorMessage = customError;
        e.target.setCustomValidity(customError);
      } else {
        e.target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    let currentErrors = {};
    setErrors((prevErrors) => {
      currentErrors = { ...prevErrors, [name]: errorMessage };
      return currentErrors;
    });

    const form = e.target.closest("form");
    const isNativeValid = form ? form.checkValidity() : true;
    const hasErrors = Object.values(currentErrors).some((error) => error);
    setIsValid(isNativeValid && !hasErrors);
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
