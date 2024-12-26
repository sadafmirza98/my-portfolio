import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import {
  /* AiFillInstagram, */
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Sadaf Mirza</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className="myAvtar" style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{ height: "40vh" }}
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h3>
                CONNECT WITH <span className="pink">ME ON</span>
              </h3>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="mailto:sadafmirza98@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/sadaf-mirza/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/_animenion_"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaXTwitter />
                  </a>
                </li>{" "}
                {/*}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/artanimous"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>*/}
              </ul>
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
  );
}

export default Home;
