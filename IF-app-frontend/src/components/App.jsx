import { useEffect, useState } from "react";
import "../blocks/page.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./Preloader";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleAddClassClick() {
    setActiveModal("add-class");
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
    setActiveModal("logout");
  }

  function handleLoginClick() {
    setIsLoggedIn(true);
    setActiveModal("login");
  }

  function handleJoinClick() {
    setActiveModal("join");
  }

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
              {/*Header*/
              /* Components of the Homepage */
              /* Components of the
          Profile Page */
              /* Components of the Staff Page */
              /* Modals */
              /*
          Footer */}
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
