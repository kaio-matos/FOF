import "./styles.css";
import { useAPI } from "../../contexts/APIContext";
import Card from "../../components/Card";
import Hero from "../../components/Hero";

export default function Home() {
  const { projects } = useAPI();

  return (
    <main>
      <section>
        <Hero
          title="Help us build a culture of helpers"
          paragraph="We're doing something about it"
          link="/about"
          linkText="See how"
          image="https://source.unsplash.com/random"
        />
      </section>
      <section className="cards_container">
        {projects.map((proj) => {
          return <Card key={proj.id._text} project={proj} />;
        })}
      </section>
    </main>
  );
}
