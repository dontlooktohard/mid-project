import axios from "axios";

const useCountrySearch = () => {
  const DiveApi = axios.get({
    baseURL: "https://world-scuba-diving-sites-api.p.rapidapi.com/api/divesite",
    params: { country: `${" "}` },
    headers: {
      "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
      "X-RapidAPI-Host": "world-scuba-diving-sites-api.p.rapidapi.com",
    },
  });
  const clearCountry = true;
  const country = false;
  return {
    country,
    clearCountry,
    DiveApi,
  };
};

export default useCountrySearch;
