import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; 
import croppedface from "../images/croppedface.jpeg";

const Home = () => {
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
              <h3>
                <Link to="/" className="link-to-page">
                  Home
                </Link>
              </h3>

              <h3>
                <Link to="/contact" className="link-to-page">
                  Contact
                </Link>
              </h3>

              <h3>
                <Link to="/projects" className="link-to-page">
                  Projects
                </Link>
              </h3>
            </div>
          </div>
        </nav>

        <div className="container">
          <div>
            <div className="about-me">
              <div className="about-content">
                <h1 className="heading" style={{ marginBottom: "10px" }}>
                  Hi !!! <h1 className="name">I'm Rakshith</h1>
                </h1>
                <h2 style={{ marginBottom: "10px" }} className="subheading">
                  I’m a frontend developer specializing in React , focused on
                  building clean and responsive web interfaces.{" "}
                </h2>
                <h1 style={{ marginBottom: "10px" }}></h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img className="image" src={croppedface} alt="Rakshith - Frontend Developer" />
            </div>
          </div>
        </div>
        <div className="footer-wrap">
          <footer>
            <h2 className="moto">
              {" "}
              My Motto ={" "}
              <span className="mot">Readable , Reliable , Responsive .</span>
            </h2>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
