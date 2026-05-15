import { useState, useEffect } from "react";
import AnimeCard from "../../../components/AnimeCard/AnimeCard";
import AnimeLoader from "../../../components/AnimeLoader/AnimeLoader";

import "./Anime.css"; 

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime?type=ona");
        const data = await res.json();

        setAnime(data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <section className="anime">
      <h2>Top Anime</h2>

      <div className="anime-container">
        {loading
          ? Array(6).fill().map((_, i) => <AnimeLoader key={i} />)
          : anime.map((item) => (
              <AnimeCard
                key={item.mal_id}
                title={item.title}
                image={item.images.jpg.image_url}
                score={item.score}
              />
            ))}
      </div>
    </section>
  );
};

export default Anime;