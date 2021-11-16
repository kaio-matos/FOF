import "./styles.css";
import { useEffect } from "react";
import { useAPI } from "../../contexts/APIContext";
import ButtonLink from "../../components/Buttons/ButtonLink";

export default function Home() {
  const { projects, getAllProjects } = useAPI();
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Help us build a culture of helpers</h1>
          <p>We're doing something about it</p>

          <ButtonLink to="/about">See how</ButtonLink>
        </div>
      </section>
      <section>
        {projects.map((proj) => {
          return <div className="card">{proj.title._text}</div>;
        })}
      </section>
    </main>
  );
}
