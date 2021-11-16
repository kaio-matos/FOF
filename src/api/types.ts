export type projectType = {
  active: { _text: string };
  activities: { _text: string };
  additionalDocumentation: { _text: string };
  approvedDate: { _text: string };
  contactAddress: { _text: string };
  contactAddress2: { _text: string };
  contactCity: { _text: string };
  contactCountry: { _text: string };
  contactName: { _text: string };
  contactPostal: { _text: string };
  contactState: { _text: string };
  contactTitle: { _text: string };
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
    imagelink: [{ url: { _text: string }; _attributes: { size: string } }];
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
  themes: { theme: { id: { _text: string }; name: { _text: string } } };
  title: { _text: string };
  type: { _text: string };
};