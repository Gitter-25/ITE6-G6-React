import "./AnimeCard.css";

const AnimeCard = ({ title, image, score }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>⭐ Score: {score}</p>
    </div>
  );
};

export default AnimeCard;