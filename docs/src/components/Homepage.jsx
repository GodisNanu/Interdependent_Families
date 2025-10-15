import heroImage from "../assets/Interderdependent Families Tree.png";
import advertisement from "../assets/IF Membership Options.png";
import "../blocks/homepage.css";
import ClassSection from "./ClassSection";

function Homepage({ isLoggedIn, handleJoinClick }) {
  return (
    <main className="homepage">
      <section className="homepage__hero-section">
        <img
          src={heroImage}
          alt="hero image"
          className="homepage__hero-section-image"
        />
      </section>
      <section className="homepage__about-section">
        <h1 className="homepage__about-section-title">
          {" "}
          About Our Homeschool Co-op{" "}
        </h1>
        <p className="homepage__about-section-description">
          We are a group of homeschooling families dedicated to learning from
          and with one another to provide a richer experience for our children.
        </p>
        <p className="homepage__about-section-description">
          Families choose to homeschool for many reasons: to gain agency, offer
          culturally relevant education, protect children from discrimination
          and bias, provide a safer learning environment, and nurture a child’s
          holistic identity and mental well-being.
        </p>
        <p className="homepage__about-section-description">
          Homeschooling can be challenging, especially for American families
          with children who have special needs or who come from marginalized
          communities. Our virtual homeschool co-op, Interdependent Families,
          provides a much-needed supportive community.
        </p>
        <p className="homepage__about-section-description">
          Interdependent Families was created specifically for marginalized
          families who require additional support and accommodations that are
          often overlooked.
        </p>
        <p className="homepage__about-section-description">
          To maintain this safe space, we require an application and approval
          process for membership. Preference will be given to marginalized
          families.
        </p>
        <p className="homepage__about-section-description">
          Our goal is to build an inclusive future we can all be proud of by
          providing a safe space free from oppression and bias.
        </p>
      </section>
      <section className="homepage__available-classes">
        <ClassSection
          isLoggedIn={isLoggedIn}
          handleJoinClick={handleJoinClick}
        />
      </section>
      <section className="homepage__membership-section">
        <img
          onClick={handleJoinClick}
          src={advertisement}
          alt="membership advertisement"
          className="homepage__membership-image"
        />
      </section>
    </main>
  );
}

export default Homepage;
