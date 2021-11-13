import convert from "xml-js";
import { projectType } from "./types";

class GlobalGiving {
  key = "";
  url = "https://api.globalgiving.org/api/public/projectservice";

  constructor(key: string) {
    this.key = key;
  }

  async getAllProjects() {
    const raw = await fetch(`${this.url}/all/projects?api_key=${this.key}`);
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });
    const object = JSON.parse(data) as {
      projects: {
        hasNext: { _text: string };
        nextProjectId: { _text: string };
        project: projectType[];
      };
      _declaration: {
        _attributes: { version: string; encoding: string; standalone: string };
      };
    };

    return object.projects.project;
  }
}

const GlobalGivingAPI = new GlobalGiving(process.env.REACT_APP_APIKEY + "");
export default GlobalGivingAPI;
