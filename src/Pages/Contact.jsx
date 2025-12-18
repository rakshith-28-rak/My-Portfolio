import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
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

      <div className="contact-cont">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a
                  href="https://www.linkedin.com/in/rakshith--s/"
                  target="_blank"
                >
                  Rakshith  S
                </a>
              </h3>
              <p>
                This is where I network and build my professional protfolio.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
              <i class="fa fa-address-card" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://twitter." target="_blank">
                  @Rakshith
                </a>
              </h3>
              <p>
                This is my resume and professional details.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://github.com/rakshith-28-rak" target="_blank">
                  @rakshith
                </a>
              </h3>
              <p>This is where I share code and work on projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
