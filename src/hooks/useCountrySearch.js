import { useState } from "react";
import axios from "axios";

const useCountrySearch = () => {
  const [divesites, setDivesites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchByCountry = async (country) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        "https://world-scuba-diving-sites-api.p.rapidapi.com/api/divesite",
        {
          params: { country },
          headers: {
            "X-RapidAPI-Key":
              "d86bc8a889mshf355cb8b5ff1b1ap12c250jsnb822f3c93682",
            "X-RapidAPI-Host": "world-scuba-diving-sites-api.p.rapidapi.com",
          },
        }
      );
      console.log(response.data);
      setDivesites(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return {
    divesites,
    loading,
    error,
    searchByCountry,
  };
};

export default useCountrySearch;
