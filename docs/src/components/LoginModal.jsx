import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { validateBasicPassword, validateBasicEmail } from "../FormValidation";

const LoginModal = ({
  handleOutsideClick,
  isOpen,
  handleLogin,
  onClose,
  handleJoinClick,
  newError,
}) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [isValid, setIsValid] = useState(false);
  const resetInputs = () => {
    setEmailInput("");
    setPasswordInput("");
    setIsValid(false);
  };

  useEffect(() => {
    if (isOpen) {
      resetInputs();
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmailInput(newValue);
    const validationError = validateBasicEmail(newValue);
    setError(validationError ? validationError : "");
    const newErrors = { ...error };
    newErrors.name = validationError;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    const validationError2 = validateBasicPassword(newPassword);
    setError2(validationError2 ? validationError2 : "");
    const newErrors = { ...error };
    newErrors.name = validationError2;
    const hasErrors = Object.values(newErrors).some((error) => error);
    setIsValid(!hasErrors);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleLogin();
    }
  }

  function handleModalClose() {
    setError("");
    setError2("");
    resetInputs();
    onClose();
  }
  return (
    <ModalWithForm
      handleOutsideClick={handleOutsideClick}
      title="Login Credentials"
      buttonText="Login"
      isOpen={isOpen}
      onClose={handleModalClose}
      handleSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="current-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="current-email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          value={emailInput}
          autoComplete="username"
        />
        {error && <p className="modal__input-error">{error}</p>}
      </label>
      <label htmlFor="current-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input "
          id="current-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={passwordInput}
          autoComplete="current-password"
        />
        {error2 && <p className="modal__input-error">{error2}</p>}
      </label>
      {newError && <p className="modal__input-error"> {newError}</p>}
      <button
        className="modal__alternative-button"
        type="button"
        onClick={handleJoinClick}
      >
        {" "}
        Or Become a Member{" "}
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
