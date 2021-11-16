import "./styles.css";
import { useAPI } from "../../contexts/APIContext";
import ButtonLink from "../../components/Buttons/ButtonLink";
import Card from "../../components/Card";

export default function Home() {
  const { projects } = useAPI();

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Help us build a culture of helpers</h1>
          <p>We're doing something about it</p>

          <ButtonLink to="/about">See how</ButtonLink>
        </div>
      </section>
      <section className="cards_container">
        {projects.map((proj) => {
          return <Card key={proj.id._text} project={proj} />;
        })}
      </section>
    </main>
  );
}
