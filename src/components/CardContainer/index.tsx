import Card from "../Card";
import { projectType } from "../../api/types";
import "./styles.css";

export default function CardContainer({
  projects,
}: {
  projects: projectType[];
}) {
  return (
    <div className="cards_container content_container">
      {projects.map((proj, index) => {
        return <Card key={proj.id._text + index} project={proj} />;
      })}
    </div>
  );
}
