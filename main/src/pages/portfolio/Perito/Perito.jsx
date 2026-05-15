import Portfolio from "../../../components/PortfolioCard/PortfolioCard";

const Perito = () => {
  return (
    <Portfolio
      name="John Gitter Perito"
      role="Frontend Developer"
      description="Passionate in React development and modern UI design. Loves building responsive and interactive web applications."

      image="/PeritoPic.jpg"

      hobbies={[
        "Watching Anime",
        "Listening to Music",
        "UI Designing",
        "Gaming",
      ]}

      skills={[
        "React JS",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "Git & GitHub",
      ]}
    />
  );
};

export default Perito;