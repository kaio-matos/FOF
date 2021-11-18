import convert from "xml-js";
import {
  getProjectResponseType,
  getProjectsResponseType,
  projectType,
  searchProjectsResponseType,
} from "./types";

class GlobalGiving {
  key = "";
  url = "https://api.globalgiving.org/api/public";
  nextProjectId = "";

  constructor(key: string) {
    this.key = key;
  }

  async getAllProjects() {
    const raw = await fetch(
      `${this.url}/projectservice/all/projects?api_key=${this.key}`
    );
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });
    const object = JSON.parse(data) as getProjectsResponseType;

    this.nextProjectId = object.projects.nextProjectId._text;

    return object.projects.project;
  }

  async getProject(id: number) {
    const raw = await fetch(
      `${this.url}/projectservice/projects/${id}?api_key=${this.key}`
    );
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });
    const object = JSON.parse(data) as getProjectResponseType;

    return object.project;
  }

  async getNextProjects() {
    const raw = await fetch(
      `${this.url}/projectservice/all/projects?api_key=${this.key}&nextProjectId=${this.nextProjectId}`
    );
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });
    const object = JSON.parse(data) as getProjectsResponseType;

    this.nextProjectId = object.projects.nextProjectId._text;

    return object.projects.project;
  }

  async searchProjects(search: string) {
    const raw = await fetch(
      `${this.url}/services/search/projects?api_key=${this.key}&q=${search}`
    );
    const text = await raw.text();
    const data = convert.xml2json(text, { compact: true, spaces: 4 });

    const object = JSON.parse(data) as searchProjectsResponseType;

    if (Number(object.search.response._attributes.numberFound) === 0) {
      return [];
    }

    if (Array.isArray(object.search.response.projects.project)) {
      return object.search.response.projects.project;
    }

    return [object.search.response.projects.project];
  }
}

const GlobalGivingAPI = new GlobalGiving(process.env.REACT_APP_APIKEY + "");
export default GlobalGivingAPI;
