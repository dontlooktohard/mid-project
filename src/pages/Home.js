import React from "react";
import img from "../assets/reef.jpg";
// import Search from "../components/Info/Search";

const Home = () => (
  <>
    {/* <Search /> */}
    <div className=".text-danger">
      <p> the world in the palm of my hand</p>
      <img src={img} alt="imag of the world dive sites"></img>
    </div>
  </>
);

export default Home;
