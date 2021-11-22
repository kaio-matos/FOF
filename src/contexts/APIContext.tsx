import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import GlobalGivingAPI from "../api/api";
import { projectType } from "../api/types";
import { MessageType, StandardMessage } from "../components/ModalMessage";

type APIContextData = {
  projects: projectType[];
  searchedProjects: projectType[];
  getAllProjects: () => Promise<void>;
  getProject: (id: number) => Promise<projectType | void>;
  lazyLoadProjects: () => Promise<void>;
  searchProjects: (search: string) => Promise<void>;
  clearSearchedProjects: () => Promise<void>;
  loading: boolean;
  message: MessageType;
};

type APIContextProviderProps = {
  children: ReactNode;
};

export const APIContext = createContext({} as APIContextData);

export function APIContextProvider({ children }: APIContextProviderProps) {
  const [projects, setProjects] = useState<projectType[]>([]);
  const [searchedProjects, setSearchedProjects] = useState<projectType[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageType>(StandardMessage);

  useEffect(() => {
    (async () => {
      const pjs: projectType[] = JSON.parse(
        localStorage.getItem("projects") + ""
      );

      if (pjs !== null && pjs.length) {
        GlobalGivingAPI.nextProjectId = String(pjs.length);
        setProjects(pjs);
      } else await getAllProjects();
    })();
  }, []);

  async function getAllProjects() {
    try {
      setLoading(true);
      const projs = await GlobalGivingAPI.getAllProjects();
      setLoading(false);
      localStorage.setItem("projects", JSON.stringify(projs));
      setProjects(projs);
    } catch (err) {
      setMessage({
        message: "Error: Something happened when loading projects",
        type: "error",
      });
      setLoading(false);
      console.log(err);
    }
  }

  async function getProject(id: number) {
    try {
      setLoading(true);
      const proj = await GlobalGivingAPI.getProject(id);
      if (!proj) {
        throw new Error("Error: Project not found");
      }
      setLoading(false);
      return proj;
    } catch (err) {
      setMessage({ message: "Error: Project not found", type: "error" });
      setLoading(false);
      console.log(err);
      return;
    }
  }

  async function lazyLoadProjects() {
    if (projects.length === 0) return;

    try {
      setLoading(true);
      const projs = await GlobalGivingAPI.getNextProjects();
      localStorage.setItem("projects", JSON.stringify([...projects, ...projs]));
      setLoading(false);
      setProjects([...projects, ...projs]);
    } catch (err) {
      setMessage({
        message: "Error: Something happened when loading new projects",
        type: "error",
      });
      setLoading(false);
      console.log(err);
    }
  }

  async function searchProjects(search: string) {
    try {
      setLoading(true);
      const projs = await GlobalGivingAPI.searchProjects(search);
      setLoading(false);
      setSearchedProjects(projs);
      if (projs.length === 0) {
        setMessage({
          message: "Any foundation was found",
          type: "success",
        });
      }
    } catch (err) {
      setMessage({
        message: "Error: Something happened when loading new projects",
        type: "error",
      });
      setLoading(false);
      console.log(err);
    }
  }

  async function clearSearchedProjects() {
    setSearchedProjects([]);
  }

  return (
    <APIContext.Provider
      value={{
        projects,
        getAllProjects,
        getProject,
        lazyLoadProjects,
        searchProjects,
        clearSearchedProjects,
        searchedProjects,
        loading,
        message,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export const useAPI = () => {
  return useContext(APIContext);
};

export {};
