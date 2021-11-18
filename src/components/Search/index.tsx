import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useAPI } from "../../contexts/APIContext";
import Button from "../Buttons/Button";
import "./styles.css";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { searchProjects, clearSearchedProjects } = useAPI();

  useEffect(() => {}, [text]);

  function activeSearch() {
    if (open) {
      searchProjects(text);
    } else {
      setOpen(!open);
    }
  }

  function disableSearch() {
    setText("");
    setOpen(!open);
    clearSearchedProjects();
  }

  return (
    <div className={`search_container`}>
      <div className={`search_input_container ${open ? "on" : "off"}`}>
        <input
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
  );
}
