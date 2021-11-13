import "./styles.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAPI } from "../../contexts/APIContext";

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
          <Link className="button" to="/about">
            See how
          </Link>
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
