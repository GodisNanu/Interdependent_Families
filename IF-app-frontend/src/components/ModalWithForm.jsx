import "../blocks/modal.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  onClose,
  handleOutsideClick,
  handleSubmit,
  isValid,
}) {
  return (
    <div
      onClick={handleOutsideClick}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content ">
        <h2 className="modal__title ">{title}</h2>
        <button onClick={onClose} src="" className="modal__close "></button>
        <form action="" className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="modal__submit" disabled={!isValid}>
            {" "}
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
