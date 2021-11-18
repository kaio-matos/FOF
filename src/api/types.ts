export type projectType = {
  active: { _text: string };
  activities: { _text: string };
  additionalDocumentation: { _text: string };
  approvedDate: { _text: string };
  contactAddress: { _text: string };
  contactAddress2?: { _text: string };
  contactCity: { _text: string };
  contactCountry: { _text: string };
  contactName: { _text: string };
  contactPostal: { _text: string };
  contactState: { _text: string };
  contactUrl: { _text: string };
  countries: {
    country: {
      iso3166CountryCode: { _text: string };
      name: { _text: string };
    };
  };
  country: { _text: string };
  dateOfMostRecentReport: { _text: string };
  funding: { _text: string };
  goal: { _text: string };
  id: { _text: string };
  image: {
    imagelink: [
      {
        url: { text: string };
        _attributes: { size: "small" };
      },
      {
        url: { _text: string };
        _attributes: { size: "thumbnail" };
      },
      {
        url: { _text: string };
        _attributes: { size: "medium" };
      },
      {
        url: { _text: string };
        _attributes: { size: "large" };
      },
      {
        url: { _text: string };
        _attributes: { size: "extraLarge" };
      },
      {
        url: { _text: string };
        _attributes: { size: "original" };
      }
    ];

    title: { _text: string };
    _attributes: { id: string };
  };
  imageGallerySize: { _text: string };
  imageLink: { _text: string };
  iso3166CountryCode: { _text: string };
  longTermImpact: { _text: string };
  modifiedDate: { _text: string };
  need: { _text: string };
  numberOfDonations: { _text: string };
  numberOfReports: { _text: string };
  progressReportLink: { _text: string };
  projectLink: { _text: string };
  region: { _text: string };
  remaining: { _text: string };
  status: { _text: string };
  summary: { _text: string };
  themeName: { _text: string };
  themes: { theme: { id: { _text: string }; name: { _text: string } }[] };
  title: { _text: string };
  type: { _text: string };

  organization?: {
    activeProjects: { _text: string };
    addressLine1: { _text: string };
    addressLine2: { _text: string };
    city: { _text: string };
    countries: {
      country: {
        iso3166CountryCode: { _text: string };
        name: { _text: string };
      };
    };
    country: { _text: string };
    ein: { _text: string };
    id: { _text: string };
    iso3166CountryCode: { _text: string };
    logoUrl: { _text: string };
    mission: { _text: string };
    name: { _text: string };
    postal: { _text: string };
    state: { _text: string };
    themes: {
      theme: {
        id: { _text: string };
        name: { _text: string };
      }[];
    };
    totalProjects: { _text: string };
    url: { _text: string };
  };
};

/**
 *
 *
 *
 */
/** ------------- Response Types ------------- */

export type getProjectsResponseType = {
  projects: {
    hasNext: { _text: string };
    nextProjectId: { _text: string };
    project: projectType[];
  };
  _declaration: {
    _attributes: { version: string; encoding: string; standalone: string };
  };
};

export type getProjectResponseType = {
  project: projectType;
  _declaration: {
    _attributes: { version: string; encoding: string; standalone: string };
  };
};

export type searchProjectsResponseType = {
  search: {
    request: {
      q: { _text: string };
      start: { _text: string };
      summary: { _text: string };
    };
    response: {
      projects: { project: projectType[] | projectType };
      _attributes: { numberFound: string; start: string };
    };
  };
};
