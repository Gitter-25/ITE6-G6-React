import Portfolio from "../../../components/PortfolioCard/PortfolioCard";

const Delda = () => {
  return (
    <Portfolio
      name="Matthew Stephen Delda"
      role="UI Designer"
      description="Creative UI designer focused on building modern and user-friendly interfaces. Passionate about clean layouts and responsive designs."

      image="/DeldaPic.jpg"

      hobbies={[
        "UI Designing",
        "Watching Movies",
        "Gaming",
        "Listening to Music",
      ]}

      skills={[
        "Figma",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ]}
    />
  );
};

export default Delda;