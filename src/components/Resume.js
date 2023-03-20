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
          <Button variant="dark" href="https://drive.google.com/file/d/1U3Wi37VZzqQTAooGa4_SCZBY9kKtsLqO/view?usp=sharing" target="_blank">
            Download Resume
          </Button>
          <h3>Proficiencies</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL and NoSQL databases</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
