import { useEffect, useRef } from "react";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import ModalMessage from "../../components/ModalMessage";
import CardContainer from "../../components/CardContainer";
import backgroundImage from "../../assets/bg-children.jpg";
import { useAPI } from "../../contexts/APIContext";
import useIsShowingElement from "../../hooks/useIsShowingElement";
import "./styles.css";

export default function Home() {
  const { projects, loading, lazyLoadProjects, message } = useAPI();
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
          link={{ url: "/FOF/about", text: "See how" }}
          image={backgroundImage}
        />
      </section>

      <div className="content_container">
        <section>
          <CardContainer projects={projects} />
        </section>

        <div ref={lazyLoadDetector}></div>
        <div className="loading_container">
          <Loading size="5rem" state={loading} />
        </div>
      </div>
      <ModalMessage currentState={message} />
    </main>
  );
}
