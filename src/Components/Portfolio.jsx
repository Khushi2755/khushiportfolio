/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Amazon Clone ",
    description:
      "Amazon Clone project is a web application built using HTML, CSS, and JavaScript. It replicates the core functionality of the Amazon website, including product listings, a shopping cart. The project demonstrates my skills in front-end development and attention to detail in recreating a seamless e-commerce experience",
    url: "https://khushi2755.github.io/Amazon-Clone/",
  },
  {
    title: "Text To Speech Converter",
    description:
      "Text to Speech Converter project is a web application developed using HTML, CSS, and JavaScript. It allows users to input text, which is then converted into spoken words using browser-based speech synthesis. This project highlights my ability to integrate web technologies with interactive functionality to enhance accessibility and user experience.",
    url: "https://khushi2755.github.io/texttospeech/",
  },
  {
    title: "My Web Development Journey",
    description:
      "I am a student from IIIT TRICHY , in initial days i am very confused about where to start but then my seniors helped me alot and i completed by DSA in C++ and then i started my WEB DEVELOPMENT journey in my 4 semester and i successfully completed the FRONT END part from a paid course and now currently am learning the BACK END part.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Movable Mouse",
    description:
      "Movable Mouse project is an interactive web application built using HTML.It tracks and visually represents the movement of the mouse cursor on the screen, providing a dynamic and engaging user experience. This project showcases my skills in event handling and real-time updates in web development.",
    url: "https://khushi2755.github.io/movablemouse/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
