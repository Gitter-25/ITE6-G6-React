import Portfolio from "../../../components/PortfolioCard/PortfolioCard";

const Rubante = () => {
  return (
    <Portfolio
      name="Ace Blixen Rubante"
      role="Backend Developer"
      description="Backend developer focused on building functional systems and managing application logic. Interested in problem-solving and technology."

      image="/RubantePic.jpg"

      hobbies={[
        "Coding",
        "Gaming",
        "Watching Anime",
        "Traveling",
      ]}

      skills={[
        "JavaScript",
        "Node.js",
        "React",
        "API Integration",
        "Problem Solving",
      ]}
    />
  );
};

export default Rubante;