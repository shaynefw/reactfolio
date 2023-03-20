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
            Hi my name is Shayne, I am an ambitious and passionate individual who is dedicated to creating coding projects. I am constantly looking for new and innovative ways to improve my skills and push the boundaries of what is possible with code. I am always eager to take on new challenges and am not afraid to dive into unfamiliar territory in order to learn and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
