import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

const LoginModal = ({
  handleOutsideClick,
  isOpen,
  handleLogin,
  onClose,
  handleJoinClick,
  newError,
}) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm({});
    }
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleLogin(values.email, values.password);
    }
  }

  function handleModalClose() {
    resetForm({});
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
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={values.email || ""}
          required
          autoComplete="username"
        />
        {errors.email && <p className="modal__input-error">{errors.email}</p>}
      </label>
      <label htmlFor="current-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input "
          id="current-password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password || ""}
          required
          minLength={"8"}
          autoComplete="current-password"
        />
        {errors.password && (
          <p className="modal__input-error">{errors.password}</p>
        )}
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
