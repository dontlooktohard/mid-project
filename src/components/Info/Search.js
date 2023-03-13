// import useSearch from "../../hooks/useSearch";
// import useCountrySearch from "../../hooks/useCountrySearch.js";

// const Search = () => {
//   const { country, clearCountry } = useCountrySearch();
//   const { text, onSubmit, onChange } = useSearch();

//   return (
//     <div>
//       <form onSubmit={onSubmit} className="form">
//         <input
//           type="text"
//           name="text"
//           placeholder="country search"
//           value={text}
//           onChange={onChange}
//         />
//         <input
//           type="submit"
//           value="search"
//           className="btn-success btn-block"
//           disabled={!text && "disabled"}
//         />
//       </form>
//       {country.length > 0 && (
//         <button
//           className="btn btn-light btn-block btn-clear"
//           onClick={clearCountry}
//         >
//           clear
//         </button>
//       )}
//     </div>
//   );
// };

// export default Search;
