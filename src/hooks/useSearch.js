import { useState } from "react";
// import { useGithubGlobalContext } from "../context/github/GithubContext";
import { useAlertGlobalContext } from "../context/AlertContext";

const useSearch = () => {
  const [text, setText] = useState("");

  //   const { searchUsers } = useGithubGlobalContext();
  const { setAlert } = useAlertGlobalContext();

  const onChange = (e) => setText(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(" pleas enter a any keywords ", "warning");
    } else {
      const res = await searchUsers(text);

      setText("");

      if (res.length === 0) {
        setAlert("didn't found!!, try again", "danger", 2.5);
      }
    }
  };

  return {
    text,
    onSubmit,
    onChange,
  };
};

export default useSearch;
