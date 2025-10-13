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

  const navigate = useNavigate();

  const onClose = () => {
    setActiveModal("");
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  function handleAddClassClick() {
    setActiveModal("add-class");
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
    {
      /* setActiveModal("logout"); */
    }
    navigate("/");
  }

  function handleLoginClick() {
    setIsLoggedIn(true);
    {
      /* setActiveModal("login"); */
    }
    navigate("/profile");
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
              <AddClassModal
                isOpen={activeModal === "add-class"}
                handleOutsideClick={handleOutsideClick}
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
