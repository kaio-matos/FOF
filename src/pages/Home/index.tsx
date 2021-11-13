import "./styles.css";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {
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
      <section></section>
    </main>
  );
}
