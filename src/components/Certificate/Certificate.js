import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import CertificateList from "./CertificateList";

function Certificate() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certifi<strong className="pink">cations</strong>
        </h1>

        <CertificateList />
      </Container>
    </Container>
  );
}

export default Certificate;
