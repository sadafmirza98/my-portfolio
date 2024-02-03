import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="pink"><i><b>Sadaf Mirza</b></i>, </span>
            a Software Developer based in<span className="pink"><i><b> Mumbai, India</b></i>, </span>
            currently working at <span className="pink"><i><b>LTIMindtree.</b></i></span>
            <br />
            I have completed  my Bachelor's Degree in <span className="pink"><i><b>Information Technology,</b></i></span> my passion lies in crafting digital solutions that make an impact.
            <br />As a certified MEARN stack developer, my technical proficiency extends to 
              <i>
                <b className="pink"> Javascript, React, Angular, Node js and Cloud Technologies </b>
              </i>
              <br />
            <br />
            When I'm not immersed in coding, you can find me:
          </p>
          <ul>
          <b>
            <li className="about-activity pink">
              <ImPointRight /> Playing Games
            </li>
             <li className="about-activity pink">
              <ImPointRight /> Painting
            </li> 
            <li className="about-activity pink">
              <ImPointRight /> Watching Anime
            </li>
            </b>
          </ul>
          <p style={{ textAlign: "justify" }}>
          I thrive on the balance between logic and creativity, bringing a unique perspective to my work. Let's connect and share our love for technology and beyond! </p>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Code with purpose, for in every line lies the potential to transform ideas into digital poetry, creating a symphony of innovation that resonates through the digital realm."{" "}
          </p>
          <footer className="blockquote-footer">Sadaf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
