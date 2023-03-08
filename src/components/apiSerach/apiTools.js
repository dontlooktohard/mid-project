import useFetch from "./hooks/useFetch";

const { users: data, loading, error } = useFetch(BASE_URL);

const BASE_URL = {
  method: "GET",
  url: "https://world-sc uba-diving-sites-api.p.rapidapi.com/api/divesite",
  params: { country: `${" "}` },
  headers: {
    "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
    "X-RapidAPI-Host": "world-scuba-diving-sites-api.p.rapidapi.com",
  },
};
