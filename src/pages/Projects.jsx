import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project1.jpg';
import project4 from '../assets/project2.jpg';

const projects = [
  {
    title: "Sample Title1",
    desc: "Sample Description1.",
    image: project1,
  },
  {
    title: "Sample Title2",
    desc: "Sample Description2.",
    image: project2,
  },
  {
    title: "Sample Title3",
    desc: "Sample Description3.",
    image: project3,
  },
  {
    title: "Sample Title4",
    desc: "Sample Description4.",
    image: project4,
  },
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-gallery">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;
