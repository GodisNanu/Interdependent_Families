import "../blocks/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/Interdependent Families Logo.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function Header({
  isLoggedIn,
  handleAddClassClick,
  handleLogoutClick,
  handleLoginClick,
  handleJoinClick,
}) {
  return (
    <header className="header">
      <p className="header__date">{currentDate}</p>
      <Link to="/">
        {" "}
        <img src={logo} alt="IF logo" className="header__logo" />
      </Link>
      {/* <div className="header__navigation-container">
            <button className="header__navigation-about-button"> About Us </button>
        </div> */}
      {isLoggedIn ? (
        <>
          <div className="header__member-button-section">
            <button
              onClick={handleAddClassClick}
              type="button"
              className="header__add-class-button"
            >
              {" "}
              + Add Class{" "}
            </button>
            <Link to="/profile">
              <button
                type="button"
                className="header__navigation-profile-button"
              >
                {" "}
                Profile{" "}
              </button>
            </Link>
            <button
              onClick={handleLogoutClick}
              type="button"
              className="header__logout-button"
            >
              {" "}
              Logout{" "}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="header__button-section">
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__login-button"
            >
              {" "}
              Log In{" "}
            </button>
            <button
              onClick={handleJoinClick}
              type="button"
              className="header__join-button"
            >
              {" "}
              Join Us{" "}
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
