import React from "react";
import ProjectCard from "../Components/ProjectCard";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="main-container">
        <div className="color-strip"></div>
        <nav>
          <div className="navbar">
            <h1
              style={{
                marginLeft: "30px",
                fontSize: "40px",
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              My Portfolio
            </h1>
            <div className="navbar-conts">
              <div className="navbar-conts">
                <h3>
                  <Link to="/">
                    <a className="link-to-page">Home</a>
                  </Link>
                </h3>
                <h3>
                  <a href="/contact" className="link-to-page">
                    Contact
                  </a>
                </h3>
                <h3>
                  <Link to="/projects">
                    <a className="link-to-page">Projects</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </nav>

        <div className="cardHolder">
          <ProjectCard
            image="/photos/movieDB.PNG"
            title={"Movie site"}
            description={
              "A dynamic movie browsing application built with React and styled using Bootstrap. The project allows users to explore movies categorized by genres. Each category showcases a list of movies, offering a seamless and interactive way to browse through different movie collections. The app focuses on clean UI and performance."
            }
            linkToView={"https://movies-showcase-v1.netlify.app/"}
          />
          <ProjectCard
            image="/photos/pixaway.PNG"
            title={"PixaWay"}
            description={
              "A frontend clone of the Pixabay website built using React and Bootstrap. The project allows users to browse and search for images with a clean, user-friendly interface, focusing on component-based architecture and efficient UI rendering."
            }
            linkToView={"https://pixaway-0028.netlify.app/"}
          />
          <ProjectCard
            image={
              "/photos/mealDB.PNG"
            }
            title={"Food - display"}
            description={"A dynamic cuisine exploration web app developed using React and the MealDB API, allowing users to search and discover food names from multiple countries worldwide."}
            linkToView={"https://food-display.netlify.app/"}
          />
          <ProjectCard
            image={
              "/photos/MusicPlayer.PNG"
            }
            title={"Music player"}
            description={"A React-based music player UI built with Tailwind CSS, using self-created static data to display playlists, albums, and track details in a clean, modern layout."}
            linkToView={"https://the-music-player-v1.netlify.app/"}
          />
          <ProjectCard
            image={
              "/photos/coffee-website.PNG"
            }
            title={"Coffee website"}
            description={"Developed a single-page, scrollable coffee store website highlighting product sections, branding, and layout structure with a user-friendly design."}
            linkToView={"https://coffee-website-0001.netlify.app/"}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
