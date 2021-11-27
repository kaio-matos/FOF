import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Button from "../Buttons/Button";
import CardContainer from "../CardContainer";
import ModalLoading from "../ModalLoading";
import { useAPI } from "../../contexts/APIContext";
import useIsShowingElement from "../../hooks/useIsShowingElement";
import "./styles.css";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const { searchProjects, clearSearchedProjects, searchedProjects, loading } =
    useAPI();

  const input = useRef<HTMLInputElement>(null);
  const searchContainer = useRef<HTMLDivElement>(null);

  const isVisible = useIsShowingElement(searchContainer);

  useEffect(() => {
    const isInSearch = searchedProjects.length ? true : false;
    isInSearch
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [searchedProjects]);

  function activeSearch() {
    if (open && text !== "" && isVisible) {
      searchProjects(text);
    } else {
      toggleSearch();
    }
  }

  function toggleSearch() {
    setText("");
    setOpen(!open);
    if (!open) input.current?.focus();
    clearSearchedProjects();
  }

  function CloseButton() {
    return (
      <div
        onClick={() => {
          toggleSearch();
        }}
        className="exit"
      >
        <MdClose />
      </div>
    );
  }

  function SearchButton() {
    return (
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
    );
  }

  return (
    <div ref={searchContainer}>
      <div className={`search_container`}>
        <div className={`search_input_container ${open ? "on" : "off"}`}>
          <input
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") activeSearch();
            }}
            autoFocus
            onChange={({ currentTarget }) => {
              setText(currentTarget.value);
            }}
            value={text}
            type="text"
          />
          <CloseButton />
        </div>
        <SearchButton />
      </div>

      <section
        className={`search_foundations ${
          searchedProjects.length ? "show" : "hide"
        }`}
      >
        <CardContainer projects={searchedProjects} />
      </section>

      <ModalLoading showWhen={loading && open && isVisible} />
    </div>
  );
}
