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

      if (!pjs || pjs.length) setProjects(pjs);
      else {
        await getAllProjects();
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    })();
  }, []);

  async function getAllProjects() {
    const projs = await GlobalGivingAPI.getAllProjects();
    setProjects(projs);
  }

  return (
    <APIContext.Provider
      value={{
        projects,
        getAllProjects,
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
