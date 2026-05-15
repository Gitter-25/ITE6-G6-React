import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-page">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Group 6</h1>
        <p>
          Welcome to our React Activities.
          Explore our activities and meet the members of Group 6.
        </p>
      </div>

      {/* MEMBERS SECTION */}
      <div className="members-container">

        <Link to="/perito" className="member-card">
          <img src="/PeritoPic.jpg" alt="Perito" />
          <h3>John Gitter Perito</h3>
          <span>Frontend Developer</span>
        </Link>

        <Link to="/delda" className="member-card">
          <img src="/DeldaPic.jpg" alt="Delda" />
          <h3>Matthew Stephen Delda</h3>
          <span>UI Designer</span>
        </Link>

        <Link to="/laudiana" className="member-card">
          <img src="/LaudianaPic.jpg" alt="Laudiana" />
          <h3>Mary Annjellyn Laudiana</h3>
          <span>UI/IX Designer</span>
        </Link>

        <Link to="/rubante" className="member-card">
          <img src="/RubantePic.jpg" alt="Rubante" />
          <h3>Ace Blixen Rubante</h3>
          <span>Backend Developer</span>
        </Link>

      </div>

      {/* ACTIVITIES SECTION */}
      <div className="activities-section">

        <h2>Activities</h2>

        <div className="activities-container">

          <Link to="/home" className="activity-card">
            Activity 1 - Home
          </Link>

          <Link to="/timer" className="activity-card">
            Activity 2 - Timer
          </Link>

          <Link to="/products" className="activity-card">
            Activity 3 - Products
          </Link>

          <Link to="/anime" className="activity-card">
            Activity 4 - Anime
          </Link>

        </div>

      </div>

    </section>
  );
};

export default LandingPage;