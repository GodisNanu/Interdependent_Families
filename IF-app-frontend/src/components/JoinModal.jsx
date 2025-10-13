import { useState } from "react";
import "../blocks/join.css";
import Loading from "./Preloader";

function JoinModal({ isOpen, handleOutsideClick, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`modal join-modal ${isOpen ? "add__class_opened" : ""}`}
        onClick={handleOutsideClick}
      >
        <div className="join__modal-content">
          <h2 className="join__modal-title"> Membership Application Form </h2>
          <button className="join__modal-close" onClick={onClose}>
            {" "}
            X{" "}
          </button>
          {isLoading && (
            <div className="join__preloader-overlay">
              <Loading />
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd5ei6TWf1pcebmK1O8W1ZY63GCHExonh_bBquXDtCtgvGoCA/viewform?embedded=true"
            width="90%"
            height="70%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={handleIframeLoad}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
}

export default JoinModal;
