import { useState, useEffect } from "react";
import axios from "axios";

function DivePlan() {
  const [apiData, setApiData] = useState([]);
  const [newCardData, setNewCardData] = useState([]);
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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddCard();
        }}
      >
        <label htmlFor="new-card-title">Title:</label>
        <input
          id="new-card-title"
          type="text"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <label htmlFor="new-card-description">Description:</label>
        <textarea
          id="new-card-description"
          value={newCardDescription}
          onChange={(e) => setNewCardDescription(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>
      <div>
        {newCardData.map((card) => (
          <div key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        {apiData.map((data) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DivePlan;
