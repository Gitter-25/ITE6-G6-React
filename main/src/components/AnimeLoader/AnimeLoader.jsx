import "./AnimeLoader.css";

const AnimeLoader = () => {
  return (
    <div className="card skeleton">
      <div className="skeleton-img"></div>
      <div className="skeleton-text title"></div>
      <div className="skeleton-text score"></div>
    </div>
  );
};

export default AnimeLoader;