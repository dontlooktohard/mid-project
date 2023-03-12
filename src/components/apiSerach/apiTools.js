import useFetch from "./hooks/useFetch";

const { users: data, loading, error } = useFetch(BASE_URL, BASE_URL2);

const BASE_URL = {
  method: "GET",
  url: "https://world-scuba-diving-sites-api.p.rapidapi.com/api/divesite",
  params: { country: `${" "}` },
  headers: {
    "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
    "X-RapidAPI-Host": "world-scuba-diving-sites-api.p.rapidapi.com",
  },
};
const BASE_URL2 = {
  method: "GET",
  url: "https://fish-species.p.rapidapi.com/fish_api/fish/Tarpon",
  params: { country: `${" "}` },
  headers: {
    "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
    "X-RapidAPI-Host": "fish-species.p.rapidapi.com",
  },
};

