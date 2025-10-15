import "../blocks/logout.css";

const LogoutModal = ({ handleOutsideClick, isOpen, handleLogout, onClose }) => {
  const style = {
    bottom: window.innerWidth <= 405 ? "20%" : "28%",
    right: window.innerWidth <= 405 ? "30%" : "35%",
  };
  return (
    <div
      className={`modal logout-modal ${isOpen ? "logout__modal_opened" : ""}`}
      onClick={handleOutsideClick}
    >
      <div className="logout__modal-content">
        <p className="logout__modal-title"> Are you sure you want to logout?</p>
        <button className="logout__modal-close" onClick={onClose}>
          {" "}
          X{" "}
        </button>
        <div className="logout__modal-buttons">
          <button
            className="logout__modal-confrim-button"
            onClick={handleLogout}
          >
            Yes
          </button>
          <button className="logout__modal-cancel-button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
