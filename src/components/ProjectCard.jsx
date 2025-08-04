import React from "react";

const ProjectCard = ({ title, desc, image }) => (
  <div className="project-card">
    {/* <img src={require(`../assets/${image}`)} alt={title} /> */}
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default ProjectCard;
