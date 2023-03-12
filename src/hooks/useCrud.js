import React, { useState, useEffect } from "react";
import axios from "axios";
const useCrud = () => {
  const [newCardData, setNewCardData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://api.example.com/data")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddCard = () => {
    // Send POST request to fish card add API
    axios
      .post("https://api.example.com/fish-card-add", {
        title: newCardTitle,
        description: newCardDescription,
      })
      .then((response) => {
        // Add new card data to newCardData array
        setNewCardData((prevState) => [...prevState, response.data]);
        // Reset form fields
        setNewCardTitle("");
        setNewCardDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteCard = (id) => {
    // Send DELETE request to fish card add API
    axios
      .delete("https://api.example.com/fish-card-delete", {
        data: { id },
      })
      .then((response) => {
        // Remove deleted card from newCardData array
        setNewCardData((prevState) =>
          prevState.filter((card) => card.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    setNewCardData,
    setApiData,
    setNewCardTitle,
    setNewCardDescription,
    handleAddCard,
    handleDeleteCard,
    newCardData,
    apiData,
    newCardTitle,
    newCardDescription,
  };
};

export default useCrud;
