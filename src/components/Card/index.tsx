import { useNavigate } from "react-router-dom";
import { projectType } from "../../api/types";
import "./styles.css";

export default function Card({ project }: { project: projectType }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/projects/${project.id._text}`);
      }}
      className="card"
    >
      <div className="card_image_container">
        <img
          src={
            project.organization
              ? project.organization.logoUrl._text
              : project.imageLink._text
          }
          alt={project.title._text}
        />
      </div>
      <div className="card_info">
        <div className="card_title">
          <span className="title">{project.title._text}</span>
          <span className="title">{project.themeName._text}</span>
        </div>
        <div className="card_data">
          <p>{project.summary._text}</p>

          <div className="card_money">
            <p
              className={
                Number(project.funding._text) < Number(project.goal._text)
                  ? "needFunds"
                  : "completeFunds"
              }
            >
              <span>$ {project.funding._text}</span> <sub>funding</sub>
            </p>
            <p className="goal">
              <span>$ {project.goal._text}</span> <sub>goal</sub>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
