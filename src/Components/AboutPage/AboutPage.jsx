import "./AboutPage.css";

// libraries 
import React from "react";

/**
 * This Component renders an Info Page. displaying some Info about how and why the project was created.
 */
const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1>About this Project</h1>

      <h2>Purpose</h2>
      <p>
        The goal of this project is to provide students, or anyone else who is
        interested in data structures, with the best tool to learn about the
        functionality and algorithms of B-tree data structure.
      </p>

      <h2>Development</h2>

      <p>
        This project is part of a supervised internal project under the Bachelor’s program at the{" "}
        <a href="https://nsut.ac.in/">Netaji Subhas University of Technology</a>
        <br />
      </p>

      <div className="development-section">
        <p>is being developed by:</p>
        <p>
          Prashant Tak
          <br />
          <a href="mailto:prashant.tak.ug24@nsut.ac.in">
            prashant.tak.ug24@nsut.ac.in
          </a>
          <br />
        </p>
        <p>
          under the supervision of:
          <br />
        </p>
        <p>
          Vijay Kumar Bohat
          <br />
          <a href="mailto:vijay.kumar.bohat@nsut.ac.in">
            vijay.kumar.bohat@nsut.ac.in
          </a>
          <br />
        </p>
      </div>
      <p>
        {/* Project Github */}
      </p>
    </div>
  );
};

export default AboutPage;