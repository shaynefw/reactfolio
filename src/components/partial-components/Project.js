import React from "react";
import "../../style/Project.css";

// Project component that displays the image of the project, the title, and the links to the live application and the GitHub repository.
const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
        <div className="project-links">
          <a href={appLink} target="_blank" rel="noreferrer" className="btn btn-app">
            Live
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer" className="btn btn-repo">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
