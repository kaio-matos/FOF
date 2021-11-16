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
};

type APIContextProviderProps = {
  children: ReactNode;
};

export const APIContext = createContext({} as APIContextData);

export function APIContextProvider({ children }: APIContextProviderProps) {
  const [projects, setProjects] = useState<projectType[]>([]);

  useEffect(() => {
    (async () => {
      const pjs: projectType[] = JSON.parse(
        localStorage.getItem("projects") + ""
      );

      if (pjs !== null && pjs.length) setProjects(pjs);
      else await getAllProjects();
    })();
  }, []);

  async function getAllProjects() {
    const projs = await GlobalGivingAPI.getAllProjects();
    localStorage.setItem("projects", JSON.stringify(projs));
    setProjects(projs);
  }

  async function getProject(id: number) {
    const proj = await GlobalGivingAPI.getProject(id);
    return proj;
  }

  return (
    <APIContext.Provider
      value={{
        projects,
        getAllProjects,
        getProject,
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
