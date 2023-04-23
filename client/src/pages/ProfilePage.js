import React from "react";
import FishCard from "../components/FishCard";
const DivePlan = () => {
  return (
    <div className=" --info-color">
      <div>
        <h1>Log you dive </h1>
        <p>her you can search all the fish you have seen in your dive</p>
      </div>
      <FishCard />
    </div>
  );
};
export default DivePlan;
