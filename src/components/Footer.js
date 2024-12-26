import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Sadaf Mirza</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:sadafmirza98@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sadaf-mirza/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/_animenion_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/sadafmirza98"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.geeksforgeeks.org/user/sadafmirza/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/sadafmirza98"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank />
              </a>
            </li>
            {/*<li className="social-icons">
              <a
                href="https://www.instagram.com/artanimous"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
