import React from "react";
import Project from "./partial-components/Project";
import "../style/Portfolio.css";

// Project array that contains the title, image, app link, and repo link for each project.1
const projects = [
  {
    title: "Getaway",
    image: "https://github.com/shaynefw/TekTriage/blob/main/public/images/ss.png",
    appLink: "https://getaway.herokuapp.com/",
    repoLink: "https://github.com/shohei-mochizuki/getaway",
  },
  {
    title: "GennyREADME",
    image: "https://github.com/shaynefw/GennyREADME/raw/main/assets/images/gennySS.png",
    appLink: "https://shaynefw.github.io/GennyREADME/",
    repoLink: "https://github.com/shaynefw/GennyREADME",
  },
  {
    title: "WikiGo",
    image: "https://github.com/jjocelynn/WikiGo/raw/main/assets/images/WikiGO-landing-page.jpg",
    appLink: "https://jjocelynn.github.io/WikiGo/",
    repoLink: "https://github.com/jjocelynn/WikiGo",
  },
  {
    title: "TekTriage",
    image: "https://github.com/shaynefw/TekTriage/raw/main/public/images/localhost_3001_.png",
    appLink: "https://tektriage.herokuapp.com/",
    repoLink: "https://github.com/shaynefw/TekTriage",
  },
  {
    title: "Travelers Choice",
    image: "https://user-images.githubusercontent.com/121307266/223154808-03533124-135f-444a-b969-620b85cb13de.png",
    appLink: "https://travelerschoice.herokuapp.com/",
    repoLink: "https://github.com/shaynefw/TravelersChoice",
  },
  {
    title: "Matrix Planner",
    image: "https://github.com/shaynefw/05-matrix-planner/raw/main/assets/images/Your%20Day%20Planner%20(1).png",
    appLink: "https://shaynefw.github.io/05-matrix-planner/",
    repoLink: "https://github.com/shaynefw/05-matrix-planner",
  },
  {
    title: "Avenger EDB",
    image: "https://github.com/shaynefw/12-Avenger-EDB/blob/main/assets/images/12-Avenger-EDB.gif?raw=true",
    appLink: "https://drive.google.com/file/d/1OfQg3CRzsNXprMWpL54LP8hOMfWIBtVe/view?usp=sharing",
    repoLink: "https://github.com/shaynefw/12-Avenger-EDB",
  },
];

// Portfolio section that links the projects array to the Project component.
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="text-center">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            appLink={project.appLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
