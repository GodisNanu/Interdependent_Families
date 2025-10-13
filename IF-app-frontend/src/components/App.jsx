import { useEffect, useState } from "react";
import "../blocks/page.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import ProfilePage from "./ProfilePage";
import JoinModal from "./JoinModal";
import AddClassModal from "./AddClassModal";
import LogoutModal from "./LogoutModal";
import LoginModal from "./LoginModal";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  /* const [isLoading, setIsLoading] = useState(false); */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [newError, setNewError] = useState("");

  const navigate = useNavigate();

  const onClose = () => {
    setActiveModal("");
    setNewError("");
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveModal("");
    navigate("/");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/profile");
    setActiveModal("");
  };

  function handleAddClassClick() {
    setActiveModal("add-class");
  }

  function handleLogoutClick() {
    setActiveModal("logout-modal");
  }

  function handleLoginClick() {
    setActiveModal("login");
  }

  function handleJoinClick() {
    setActiveModal("join-modal");
  }

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="page">
            <div className="page__content">
              <Header
                isLoggedIn={isLoggedIn}
                handleAddClassClick={handleAddClassClick}
                handleLogoutClick={handleLogoutClick}
                handleLoginClick={handleLoginClick}
                handleJoinClick={handleJoinClick}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Homepage
                      isLoggedIn={isLoggedIn}
                      handleJoinClick={handleJoinClick}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <ProfilePage
                        isLoggedIn={isLoggedIn}
                        handleJoinClick={handleJoinClick}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <JoinModal
                isOpen={activeModal === "join-modal"}
                handleOutsideClick={handleOutsideClick}
                onClose={onClose}
              />
              <LoginModal
                handleOutsideClick={handleOutsideClick}
                isOpen={activeModal === "login"}
                handleLogin={handleLogin}
                onClose={onClose}
                handleJoinClick={handleJoinClick}
                newError={newError}
              />
              <AddClassModal
                isOpen={activeModal === "add-class"}
                handleOutsideClick={handleOutsideClick}
                onClose={onClose}
              />
              <LogoutModal
                handleOutsideClick={handleOutsideClick}
                isOpen={activeModal === "logout-modal"}
                handleLogout={handleLogout}
                onClose={onClose}
              />
              {/* Components of the Staff Page */
              /* Modals */}
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
