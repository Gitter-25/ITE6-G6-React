import Portfolio from "../../../components/PortfolioCard/PortfolioCard";

const Laudiana = () => {
  return (
    <Portfolio
      name="Mary Annjellyn Laudiana"
      role="UI/UX Designer"
      description="Responsible for organizing project documentation and ensuring clear communication within the team. Passionate about creativity and teamwork."

      image="/LaudianaPic.jpg"

      hobbies={[
        "Writing",
        "Watching K-Dramas",
        "Photography",
        "Listening to Music",
      ]}

      skills={[
        "Documentation",
        "Microsoft Office",
        "Canva",
        "HTML",
        "Team Collaboration",
      ]}
    />
  );
};

export default Laudiana;