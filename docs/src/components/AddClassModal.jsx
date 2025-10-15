import { useState } from "react";
import "../blocks/add.css";
import Loading from "./Preloader";

function AddClassModal({ isOpen, handleOutsideClick, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={`modal add-class ${isOpen ? "add__class_opened" : ""}`}
      onClick={handleOutsideClick}
    >
      <div className="add__class-content">
        <h2 className="add__class-title"> Proposed Class Form </h2>
        <button className="add__class-close-button" onClick={onClose}>
          {" "}
          X{" "}
        </button>
        {isLoading && (
          <div className="add__class-overlay">
            <Loading />
          </div>
        )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSefqHHr3H-GFKnxBv-1rMo3WSD9Gh9tTWfY1LIfU_6mrcJxoQ/viewform?embedded=true"
          width="90%"
          height="75%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={handleIframeLoad}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default AddClassModal;
