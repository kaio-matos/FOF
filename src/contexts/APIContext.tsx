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

type ProjectsStorage = {
  timestamp: string | Date;
  projects: projectType[];
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

  function isExpired(timestamp: Date, daysNumber: number) {
    const date = timestamp.getMilliseconds();
    const now = new Date().getMilliseconds();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = day * daysNumber;

    if (date + days <= now) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    (async () => {
      const pjs: ProjectsStorage = JSON.parse(
        localStorage.getItem("projects") + ""
      );
      const requestedDate = new Date(pjs?.timestamp);

      if (
        pjs !== null &&
        pjs.projects?.length &&
        !isExpired(requestedDate, 2)
      ) {
        GlobalGivingAPI.nextProjectId = String(pjs.projects.length);
        setProjects(pjs.projects);
      } else {
        await getAllProjects();
      }
    })();
  }, []);

  async function getAllProjects() {
    try {
      setLoading(true);
      const projs = await GlobalGivingAPI.getAllProjects();
      setLoading(false);
      localStorage.setItem(
        "projects",
        JSON.stringify({
          projects: projs,
          timestamp: new Date(),
        } as ProjectsStorage)
      );
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
      localStorage.setItem(
        "projects",
        JSON.stringify({
          projects: [...projects, ...projs],
          timestamp: new Date(),
        } as ProjectsStorage)
      );
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
