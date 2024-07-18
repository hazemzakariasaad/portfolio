import React from "react";
import ophthalmology_clinic from "../assets/ophthalmology_clinic.jpg";
Prosthetics;
import Prosthetics from "../assets/Prosthetics.jpg";
import findme from "../assets/findme.jpg";
import vision from "../assets/vision.jpg";

export default function Projects() {
  return (
    <section id="Projects" className="projects--section">
      <h1 className="project--title">Projects</h1>
      <a href="https://github.com/hazemzakariasaad">
        <button>View more projects</button>{" "}
      </a>
      <div className="projects--container">
        <a href="https://github.com/hazemzakariasaad/Ophthalmology-Clinic">
          <img src={ophthalmology_clinic} />
          <h3>Ophthalmology Website</h3>
          <p>
            The Ophthalmology Clinic Information System (OCIS) is a specialized
            software solution tailored to enhance operational efficiency in
            ophthalmology clinics.
          </p>
        </a>
        <a href="https://github.com/hazemzakariasaad/Advanced_Computer_Vision_Suite">
          <img src={vision} />
          <h3>Advanced Computer Vision</h3>
          <p>
            the Advanced Computer Vision Suite, a powerful tool designed by PyQt
            to simplify image processing and computer vision tasks through an
            intuitive and user-friendly interface.
          </p>
        </a>
        <a href="https://github.com/hazemzakariasaad/Prosthetics-Website">
          <img src={Prosthetics} />
          <h3>Prosthetics Website</h3>
          <p>
            A professional admin prosthetics website developed for a hospital to
            efficiently manage their database. The website allows for seamless
            CRUD (Create, Read, Update, Delete) operations on the database
          </p>
        </a>
        <a href="https://github.com/hazemzakariasaad/Face_Detection_Recognition_System">
          <img src={findme} className="hover" />
          <h3>Face Detection Recognition</h3>
          <p>
            FindMe Website hosts a collection of AI and Computer Vision tools
            for face detection and recognition.
          </p>
        </a>
      </div>
    </section>
  );
}
