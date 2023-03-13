import React from "react";
import FishCard from "../components/FishCard";
const DivePlan = () => {
  return (
    <div className="container">
      <div>
        <h1>Log you dive </h1>
        <p className=".text-success">
          her you can search all the fish you have seen in your dive
        </p>
      </div>
      <FishCard />
    </div>
  );
};
export default DivePlan;
