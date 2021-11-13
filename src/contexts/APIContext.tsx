import { createContext, ReactNode, useContext, useState } from "react";
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
  const [projects, setProjects] = useState([] as projectType[]);

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
