import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Our environment includes all living and non-living things on our planet earth. Earth is a beautiful place with lavish green lands, diverse species, oceans and natural resources. The valuable things in the natural environment are natural resources. But over the past few decades global warming is causing serious damage to our environment.</p> 
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
