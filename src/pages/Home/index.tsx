import "./styles.css";
import { useAPI } from "../../contexts/APIContext";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import { useEffect, useRef } from "react";
import useIsShowingElement from "../../hooks/useIsShowingElement";

export default function Home() {
  const { projects, loading, lazyLoadProjects } = useAPI();
  const lazyLoadDetector = useRef<HTMLDivElement>(null);
  const isVisible = useIsShowingElement(lazyLoadDetector);

  useEffect(() => {
    lazyLoadProjects();
  }, [isVisible]);

  return (
    <main>
      <section>
        <Hero
          title="Help us build a culture of helpers"
          paragraph="We're doing something about it"
          link={{ url: "/about", text: "See how" }}
          image="https://source.unsplash.com/random"
        />
      </section>

      <section className="cards_container">
        {projects.map((proj) => {
          return <Card key={proj.id._text} project={proj} />;
        })}
      </section>

      <div ref={lazyLoadDetector}></div>
      <div className="loading_container">
        <Loading size="5rem" state={loading} />
      </div>
    </main>
  );
}
