import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom"; // Only import what you need
import croppedface from "../images/croppedface.jpeg";

const HomePage = () => {
  return (
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
            <div className="about-content"> {/* Changed form to div */}
              <h1 className="heading" style={{ marginBottom: "10px" , alignItems:'center'}}>
                Hi !!! <span className="name">I'm Rakshith</span> {/* Changed h1 to span */}
              </h1>
              <h2 style={{ marginBottom: "10px" }} className="subheading">
                I'm a frontend developer specializing in React, focused on
                building clean and responsive web interfaces.
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div> {/* Changed form to div */}
            <img className="image" src={croppedface} alt="Rakshith - Frontend Developer" />
          </div>
        </div>
      </div>
      <div className="footer-wrap">
        <footer>
          <h2 className="moto"> {/* Changed from h1 to h2 */}
            My Motto ={" "}
            <span className="mot">Readable, Reliable, Responsive.</span>
          </h2>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;