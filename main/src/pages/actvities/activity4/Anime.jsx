import { useState, useEffect } from "react";
import AnimeCard from "../../../components/AnimeCard/AnimeCard";
import AnimeLoader from "../../../components/AnimeLoader/AnimeLoader";

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
    <section>
      <h2 style={{justifyContent: "center"}}>Top Anime</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
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