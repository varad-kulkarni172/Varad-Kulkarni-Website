import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Varad Kulkarni </span>
            from <span className="purple"> Kolhapur, Maharashtra, India.</span>
            <br />
            I am currently 3rd Year Computer Engineering Student at VIT Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs (Which I have started doing just recently)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "#6892B2" }}>
            "If you never try; You'll never know"{" "}
          </p>
          <footer className="blockquote-footer">Varad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
