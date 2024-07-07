export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "sanskrit", name: "Sanskrit" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API;
