import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import EventLeft from "../components/EventLeft";
import EventRight from "../components/EventRight";

class Events extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Events</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <EventLeft />
          </Col>
          <Col>
            <EventRight />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Events);
