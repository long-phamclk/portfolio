import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Long Pham </span>
            <br /> I am a web developer
            <br />
            Additionally, I am currently employed as a Software Engineer at Jung
            Talents.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Food exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Meaningful relationship sparks meaningful learning moments!"{" "}
          </p>
          <footer className="blockquote-footer">Long</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
