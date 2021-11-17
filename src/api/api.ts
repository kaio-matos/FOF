import convert from "xml-js";
import { projectType } from "./types";

class GlobalGiving {
  key = "";
  url = "https://api.globalgiving.org/api/public/projectservice";
  nextProjectId = "";

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

    this.nextProjectId = object.projects.nextProjectId._text;
    console.log(object);

    return object.projects.project;
  }

  async getProject(id: number) {
    const raw = await fetch(`${this.url}/projects/${id}?api_key=${this.key}`);
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });
    const object = JSON.parse(data) as {
      project: projectType;
      _declaration: {
        _attributes: { version: string; encoding: string; standalone: string };
      };
    };

    return object.project;
  }

  async getNextProjects() {
    const raw = await fetch(
      `${this.url}/all/projects?api_key=${this.key}&nextProjectId=${this.nextProjectId}`
    );
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

    this.nextProjectId = object.projects.nextProjectId._text;

    return object.projects.project;
  }
}

const GlobalGivingAPI = new GlobalGiving(process.env.REACT_APP_APIKEY + "");
export default GlobalGivingAPI;
