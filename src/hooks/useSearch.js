// import { useState } from "react";
// import useCountrySearch from "./useCountrySearch";
// import { useAlertGlobalContext } from "../context/AlertContext";

// const useSearch = () => {
//   const [text, setText] = useState("");

//   const { setAlert } = useAlertGlobalContext();
//   const { countrySearch } = useCountrySearch();

//   const onChange = (e) => setText(e.target.value);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (text === "") {
//       setAlert(" pleas enter a any keywords ", "warning");
//     } else {
//       const res = await countrySearch(text);

//       setText("");

//       if (res.length === 0) {
//         setAlert("didn't found!!, try again", "danger", 2.5);
//       }
//     }
//   };

//   return {
//     text,
//     onSubmit,
//     onChange,
//   };
// };

// export default useSearch;
