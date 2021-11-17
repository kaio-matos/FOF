import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import GlobalGivingAPI from "../api/api";
import { projectType } from "../api/types";

type APIContextData = {
  projects: projectType[];
  getAllProjects: () => Promise<void>;
  getProject: (id: number) => Promise<projectType>;
  lazyLoadProjects: () => Promise<void>;
  loading: boolean;
};

type APIContextProviderProps = {
  children: ReactNode;
};

export const APIContext = createContext({} as APIContextData);

export function APIContextProvider({ children }: APIContextProviderProps) {
  const [projects, setProjects] = useState<projectType[]>([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const projs = await GlobalGivingAPI.getAllProjects();
    setLoading(false);
    localStorage.setItem("projects", JSON.stringify(projs));
    setProjects(projs);
  }

  async function getProject(id: number) {
    setLoading(true);
    const proj = await GlobalGivingAPI.getProject(id);
    setLoading(false);
    return proj;
  }

  async function lazyLoadProjects() {
    setLoading(true);
    const projs = await GlobalGivingAPI.getNextProjects();
    localStorage.setItem("projects", JSON.stringify(projs));
    setLoading(false);
    console.log(projects.length, projs.length);
    setProjects([...projects, ...projs]);
  }

  return (
    <APIContext.Provider
      value={{
        projects,
        getAllProjects,
        getProject,
        lazyLoadProjects,
        loading,
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
