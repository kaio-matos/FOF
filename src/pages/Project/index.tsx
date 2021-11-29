import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Hero from "../../components/Hero";
import ModalLoading from "../../components/ModalLoading";
import ModalMessage from "../../components/ModalMessage";
import { useAPI } from "../../contexts/APIContext";
import { projectType } from "../../api/types";
import "./styles.css";

export default function Project() {
  const { id } = useParams();
  const { getProject, loading, message } = useAPI();
  const [project, setProject] = useState<projectType>();

  const completeGoal = Number(project?.remaining._text) === 0;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      const pj = await getProject(Number(id));
      if (pj) setProject(pj);
    })();
  }, []);

  return (
    <main className="main">
      <ModalLoading showWhen={loading} />
      {project ? (
        <>
          <section>
            <Hero
              style={{ padding: "0 3rem" }}
              className="hero_fundation"
              title={project.title._text}
              paragraph={project.country._text}
              link={{
                url: project.contactUrl._text,
                text: "Help us",
                otherLocation: true,
              }}
              image={project.image.imagelink[5].url._text}
            />
          </section>
          <div className="content_container">
            <section className="information_container">
              <div className="information_title_text">
                <span className="title">Long term impact</span>
                <p>{project.longTermImpact._text}</p>
              </div>

              <div className="information_title_text">
                <span className="title">Needs</span>
                <p>{project.need._text}</p>
              </div>

              <div className="information_title_text">
                <span className="title">Activities</span>
                <p>{project.activities._text}</p>
              </div>

              <div className="project_status">
                <p className="goal">
                  <span>Goal</span>
                  <span>$ {project.goal._text}</span>
                </p>
                <p
                  className={`${completeGoal ? "completeFunds" : "needFunds"}`}
                >
                  <span>Funding</span>
                  <span>$ {project.funding._text}</span>
                </p>
                <p>
                  <span>Remaining</span>
                  <span>$ {project.remaining._text}</span>
                </p>
                <p>
                  <span>Donations</span>
                  <span>{project.numberOfDonations._text}</span>
                </p>
                <p>
                  <span>Reports</span>
                  <span>{project.numberOfReports._text}</span>
                </p>

                <p>
                  <span>Status</span>
                  <span>{project.status._text}</span>
                </p>
              </div>

              <address className="contact">
                <span className="title">Contact</span>
                <p>
                  {project.contactName
                    ? `Talk to ${project.contactName._text}`
                    : ""}
                </p>
                <p>
                  {project.contactPostal
                    ? `Postal: ${project.contactPostal._text}`
                    : ""}
                </p>

                <p>
                  {project.contactUrl ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.contactUrl._text}
                    >
                      {project.contactUrl._text}
                    </a>
                  ) : (
                    ""
                  )}
                </p>

                <p>
                  {project.contactCountry._text},{"  "}
                  {project.contactState._text},{"  "}
                  {project.contactCity._text},{"  "}
                  {project.contactAddress._text}
                </p>
              </address>
            </section>
          </div>
        </>
      ) : (
        ""
      )}
      <ModalMessage currentState={message} />
    </main>
  );
}
