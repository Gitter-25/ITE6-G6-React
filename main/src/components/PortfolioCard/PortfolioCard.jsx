import "./PortfolioCard.css";

const PortfolioCard = ({
  name,
  role,
  description,
  image,
  hobbies,
  skills,
}) => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-image">
          <img src={image} alt={name} />
        </div>

        <div className="portfolio-content">

          <h1>{name}</h1>
          <h3>{role}</h3>

          <div className="portfolio-section">
            <h2>About Me</h2>
            <p>{description}</p>
          </div>

          <div className="portfolio-section">
            <h2>Hobbies</h2>

            <div className="portfolio-tags">
              {hobbies.map((hobby, index) => (
                <span key={index}>{hobby}</span>
              ))}
            </div>
          </div>

          <div className="portfolio-section">
            <h2>Skills</h2>

            <div className="portfolio-tags">
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioCard;