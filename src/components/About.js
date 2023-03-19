import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://avatars.githubusercontent.com/u/20311430?s=400&u=53bbc95cc3de68db38dae5f19583233edee570ad&v=4"
              alt="Your Name"
              className="img-fluid about-img"
            />
          </div>
          <div className="col-md-8">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              A short bio about yourself, your experience, and your skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
