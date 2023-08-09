import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import childcare from "../../assets/Projects/childcare.png";
import traveller from "../../assets/Projects/traveller.png";
import petme from "../../assets/Projects/petme.png";

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
              imgPath={traveller}
              isBlog={false}
              title="Traveller"
              description="The Traveller web application was designed to provide travel information and convienience for travellers, as it provides a 7-day weather forecast and recommended attraction for the user, as well as a shopping list that the user can add to."
              ghLink="https://github.com/longpham112/the-traveller"
              demoLink="https://longpham112.github.io/the-traveller/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={childcare}
              isBlog={false}
              title="Little Sprout Childcare"
              description="The application allow user to log the daily checklist as they have done the tasks, and for user to save a note for the center manager later."
              ghLink="https://github.com/longpham112/little-sprout-childcare"
              demoLink="https://little-sprout-childcare.netlify.app/"
            />
          </Col>
          /*{" "}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petme}
              isBlog={false}
              title="Petme"
              description="PetMe: Find love, adopt joy! Discover your ideal pet companion on our user-friendly platform. Adopt, love, and cherish a furry friend today!"
              ghLink="https://github.com/longpham112/pet-me-site"
              demoLink=""
            />
          </Col>{" "}
          */
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
