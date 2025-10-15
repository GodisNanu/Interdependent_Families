import ClassSection from "./ClassSection";
import "../blocks/profile.css";

function ProfilePage({ isLoggedIn, handleJoinClick }) {
  return (
    <div className="profile__page">
      <section className="profile__page-hero">
        <div className="profile__page-hero-image"></div>
        <h1 className="profile__page-hero-greeting"> Welcome Back, </h1>
        <h2 className="profile__page-hero-text"> MemberLastName Family !</h2>
      </section>
      <section className="profile__page-calendar">
        <h2 className="profile__page-calendar-heading">
          **Be sure you have recieved enrollment confirmation in order to access
          class meetings and resources**
        </h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showNav=0&showTabs=0&mode=MONTH&title=Interdependent%20Families%20Class%20Calendar&src=YzI5M3NwcmU2MTB2OWZxazBybGx1ZDh2am9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237cb342"
          style={{ border: "solid 1px #777" }}
          width="100%"
          height="1000"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </section>
      <section className="profile__page-available-classes">
        <ClassSection
          isLoggedIn={isLoggedIn}
          handleJoinClick={handleJoinClick}
        />
      </section>
    </div>
  );
}

export default ProfilePage;
