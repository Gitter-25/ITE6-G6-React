import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing">

      {/* 👥 Group Intro */}
      <div className="intro">
        <h1>Group 6</h1>
        <ul>
          <li>John Gitter Perito</li>
          <li>Matthew Stephen Delda</li>
          <li>Mary Annjellyn Laduiana</li>
          <li>Ace Blixen Rubante</li>
        </ul>
      </div>

      {/* 📂 Activities */}
      <div className="activities">
        <h2>Activities</h2>

        <div className="buttons">
          <Link to="/home" className="btn">Activity 1 - Home</Link>
          <Link to="/timer" className="btn">Activity 2 - Timer</Link>
          <Link to="/products" className="btn">Activity 3 - Products</Link>
          <Link to="/anime" className="btn">Activity 4 - Anime</Link>
        </div>
      </div>

    </section>
  );
};

export default LandingPage;