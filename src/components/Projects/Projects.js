import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ping from "../../Assets/Projects/chat.png";
import spotlight from "../../Assets/Projects/tab.png";
import GDSC from "../../Assets/Projects/TO DO.jpg";
import cardio from "../../Assets/Projects/Cardiovascular-Disease.jpg";
import song from "../../Assets/Projects/music app.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardio}
              isBlog={false}
              title="Heart Disease Prediction Using Machine Learning"
              description="Heart Disease Prediction done easy with ML and get 99 % accurate results. We have used Random Forest Algorithm here."
              ghLink="https://github.com/varad-kulkarni172/Heart-Disease-Prediction-using-ML"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GDSC}
              isBlog={false}
              title="To Do List"
              description="A simple Vanilla JS based To Do List whose DataBase is your individual Search Engine's Local Storage"
              ghLink="https://github.com/varad-kulkarni172/GDSC-ToDoList"
              demoLink="https://varad-kulkarni172.github.io/GDSC-ToDoList/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={song}
              isBlog={false}
              title="YourSong"
              description="Simple Music Player which plays around 20 songs in any random order. If you want to add your own songs just fork and clone this repo and add your favourite songs. Sorry for the crappy and irresponsive UI."
              ghLink="https://github.com/varad-kulkarni172/YourSong"
              demoLink="https://varad-kulkarni172.github.io/YourSong/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ping}
              isBlog={false}
              title="Ping!"
              description="A MERN Stack based Chat Application. Additional Functionality can't be disclosed as I have kept this repo private and it is under development. The below button is disabled."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotlight}
              isBlog={false}
              title="SpotLight - Your Best Tab Manager Ever"
              description="Will do all the tasks that a Tab Manager is expected to do. Functionality can't be disclosed at the moment as I have kept this repo private and it is under development. The below button is disabled."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
