import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useAPI } from "../../contexts/APIContext";
import Button from "../Buttons/Button";
import Card from "../Card";
import ModalLoading from "../ModalLoading";
import "./styles.css";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { searchProjects, clearSearchedProjects, searchedProjects, loading } =
    useAPI();

  useEffect(() => {
    searchedProjects.length
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [searchedProjects]);

  function activeSearch() {
    if (open && text !== "") {
      searchProjects(text);
    } else {
      disableSearch();
    }
  }

  function disableSearch() {
    setText("");
    setOpen(!open);
    clearSearchedProjects();
  }

  return (
    <div>
      <div className={`search_container`}>
        <div className={`search_input_container ${open ? "on" : "off"}`}>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                activeSearch();
              }
            }}
            onChange={({ currentTarget }) => {
              setText(currentTarget.value);
            }}
            value={text}
            type="text"
          />
          <div
            onClick={() => {
              disableSearch();
            }}
            className="text exit"
          >
            <MdClose />
          </div>
        </div>
        <Button
          style={{
            borderRadius: open ? "0 0.2rem 0.2rem 0" : "0.2rem",
            transition: "background-color 500ms, color 500ms, border-radius 2s",
            alignItems: "center",
            zIndex: 5,
          }}
          onClick={activeSearch}
        >
          <BiSearch fontSize="1.3rem" />
        </Button>
      </div>

      <section
        className={`search_foundations ${
          searchedProjects.length ? "show" : "hide"
        }`}
      >
        <section className="search_cards_container content_container">
          {searchedProjects.map((proj, index) => {
            return <Card key={proj.id._text + index} project={proj} />;
          })}
        </section>
      </section>

      <ModalLoading showWhen={loading && open} />
    </div>
  );
}
