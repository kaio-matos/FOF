import { useNavigate } from "react-router-dom";
import { projectType } from "../../api/types";
import "./styles.css";

export default function Card({ project }: { project: projectType }) {
  const navigate = useNavigate();
  const fundStatus = Number(project.funding._text) < Number(project.goal._text);

  function openProjectPage() {
    navigate(`/FOF/projects/${project.id._text}`);
  }

  function collapseString(string: string, collapseWhen = 150) {
    return string.slice(0, collapseWhen) + "...";
  }

  function getExistingImage(project: projectType) {
    return project.organization
      ? project.organization?.logoUrl?._text
      : project.imageLink._text;
  }

  return (
    <div onClick={openProjectPage} className="card">
      <div className="card_image_container">
        <img src={getExistingImage(project)} alt={project.title._text} />
      </div>

      <div className="card_info">
        <div className="card_title">
          <span className="title">{project.title._text}</span>
          <span className="title">{project.themeName._text}</span>
        </div>

        <div className="card_data">
          <p>{collapseString(project.summary._text)}</p>

          <div className="card_money">
            <p className={fundStatus ? "needFunds" : "completeFunds"}>
              <span>$ {project.funding._text}</span>
              <sub>funding</sub>
            </p>
            <p className="goal">
              <span>$ {project.goal._text}</span>
              <sub>goal</sub>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
