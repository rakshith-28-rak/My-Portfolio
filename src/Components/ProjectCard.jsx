import React from "react";

const ProjectCard = ({ image, title, description, linkToView }) => {
  return (
    <>
      <main className="main-cont">
        <div className="project-card">
          <img src={image} alt={title} />
          <div className="card-content">
            <h2>{title} </h2>
            <p>{description}</p>
            <a href={linkToView} target="_blank" rel="noopener noreferrer">
              Click to view ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectCard;
