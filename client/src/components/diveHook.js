import { useState } from "react";
import useCountrySearch from "../hooks/useCountrySearch";

const diveHooks = () => {
  const [country, setCountry] = useState("");
  const { divesites, loading, error, searchByCountry } = useCountrySearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchByCountry(country);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {divesites.length > 0 && (
        <ul>
          {divesites.map((divesite) => (
            <li key={divesite.id}>{divesite.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default diveHooks;
