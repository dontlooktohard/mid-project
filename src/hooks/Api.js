import axios from "axios";

let RapidApiFish;

const FishApi = axios.create({
  baseURL: "https://fish-species.p.rapidapi.com/fish_api/fish/Tarpon",
  headers: {
    "X-RapidAPI-Key": "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
    "X-RapidAPI-Host": "world-scuba-diving-sites-api.p.rapidapi.com",
  },
  params: {
    client_id: RapidApiDiveSite,
    client_secret: RapidApiFish,
    per_page: 5,
    sort: "updated:asc",
  },
});

export { FishApi };
