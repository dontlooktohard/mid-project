import useCrud from "../hooks/useCrud";

const DivePlan = () => {
  const {
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
  } = useCrud;

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
};

export default DivePlan;
