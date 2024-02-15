import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer text-center bg-light text-dark container-fluid flex-column pt-3">
      <div className="container-fluid p-3 gap-2 d-grid d-md-flex flex-row flex-wrap justify-content-around">
        <a href="tel:+5555555555" className="btn btn-light">
          <i className="fa-solid fa-phone m-1" aria-hidden="true"></i>
          555.555.5555
        </a>
        <a href="mailto:ytasheva@website.com" className="btn btn-light">
          <i className="fa-regular fa-envelope m-1" aria-hidden="true"></i>
          EduFlix@gmail.com
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
        </a>
        <a
          href="https://uk.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>{" "}
          LinkedIn
        </a>
      </div>
      <div className="text-center d-block bg-light text-dark container-fluid mb-3 pt-3">
        <ul>
          <b>EduFlix &copy; {today.getFullYear()}</b>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
