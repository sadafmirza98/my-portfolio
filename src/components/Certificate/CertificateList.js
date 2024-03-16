import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUdemy,
  SiPluralsight,
  SiHackerrank,
  SiAmazonaws,
} from "react-icons/si";

function CertificateList() {
  const awsTechnicalAccreditation =
    "https://www.credly.com/earner/earned/badge/bf93e557-c642-4697-b055-8982042bef1d";
  const underStandingTypeScript =
    "https://www.udemy.com/certificate/UC-dfa845ec-5214-4686-8902-034a140633f8/";
  const graphQL =
    "https://www.udemy.com/certificate/UC-8bb47149-2a5e-466a-a0ad-0aff48f9de9e/";
  const javaScript =
    "https://www.udemy.com/certificate/UC-4085a94e-bf2a-4675-960a-0ac977fc053b/";
  const angular =
    "https://www.udemy.com/certificate/UC-631fdf72-d002-47cf-859d-a55de220afc9/";
  const docker =
    "https://app.pluralsight.com/learner/user/courses/v2/d2aad287-fbf0-407b-ad7a-92e8793501fd/certificate";
  const genAI =
    "https://app.pluralsight.com/learner/user/courses/v2/4d314ee7-353d-4895-af37-4596d88bbd48/certificate";
  const promptEngg =
    "https://app.pluralsight.com/learner/user/courses/v2/5e7d8c9a-77c0-4415-a131-fd935cd68430/certificate";
  const chatGPT =
    "https://app.pluralsight.com/learner/user/courses/v2/5a4fdeb2-01e1-41ff-9ae6-4c82eabca573/certificate";
  const bootstrap =
    "https://app.pluralsight.com/learner/user/courses/v2/865059e1-d89b-47fe-947e-1f981f0de678/certificate";
  const hrJavascript = "https://www.hackerrank.com/certificates/29b2e1abed44";
  const hrSQL = "https://www.hackerrank.com/certificates/de33bc217d7d";
  const mern =
    "https://udemy-certificate.s3.amazonaws.com/image/UC-7c6ff919-951c-4000-a3a9-0190257b2452.jpg";
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={awsTechnicalAccreditation}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAmazonaws />
        </a>
        <h6>AWS Partner: Accreditation (Technical)</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href={mern} target="_blank" rel="noopener noreferrer">
          <SiUdemy />
        </a>
        <h6>The MERN Fullstack Guide</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={underStandingTypeScript}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiUdemy />
        </a>
        <h6>Understanding TypeScript</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={graphQL} target="_blank" rel="noopener noreferrer">
          <SiUdemy />
        </a>
        <h6>GraphQL With React</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={javaScript} target="_blank" rel="noopener noreferrer">
          <SiUdemy />
        </a>
        <h6>JavaScript for Beginners</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={angular} target="_blank" rel="noopener noreferrer">
          <SiUdemy />
        </a>
        <h6>Angular: The Complete Guide</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={hrJavascript} target="_blank" rel="noopener noreferrer">
          <SiHackerrank />
        </a>
        <h6>JavaScript (Intermediate)</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={hrSQL} target="_blank" rel="noopener noreferrer">
          <SiHackerrank />
        </a>
        <h6>SQL (Advanced)</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={docker} target="_blank" rel="noopener noreferrer">
          <SiPluralsight />
        </a>
        <h6>Docker and Kubernetes: The Big Picture</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={genAI} target="_blank" rel="noopener noreferrer">
          <SiPluralsight />
        </a>
        <h6>Exploring Generative AI Models and Architecture</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={promptEngg} target="_blank" rel="noopener noreferrer">
          <SiPluralsight />
        </a>
        <h6>Getting Started on Prompt Engineering with Generative AI</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={chatGPT} target="_blank" rel="noopener noreferrer">
          <SiPluralsight />
        </a>
        <h6>ChatGPT and Generative AI: The Big Picture</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href={bootstrap} target="_blank" rel="noopener noreferrer">
          <SiPluralsight />
        </a>
        <h6>Bootstrap: Getting Started</h6>
      </Col>
    </Row>
  );
}

export default CertificateList;
