import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/Resume.css';

// Resume section that displays the resume and proficiencies.
const Resume = () => {
  return (
    <Container className="resume-section">
      <Row>
        <Col>
          <h2>Resume</h2>
          <Button variant="dark" href="2022swres.pdf" download> 
            Download Resume
          </Button>
          <h3>Proficiencies</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li><span className="teal-color">M</span>ongoDB</li>
            <li><span className="teal-color">E</span>xpress</li>
            <li><span className="teal-color">R</span>eact</li>
            <li><span className="teal-color">N</span>ode.js</li>
            <li>SQL</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
