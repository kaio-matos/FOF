import Loading from "../Loading";
import "./styles.css";

export default function ModalLoading({ showWhen }: { showWhen: boolean }) {
  return (
    <div
      className={`loading_container_modal ${showWhen ? "show_container" : ""}`}
    >
      <Loading size="5rem" state={showWhen} />
    </div>
  );
}
