import React from "react";
import { Card, Row, Jumbotron, Col, Container } from "reactstrap";
import "./InfoCards.css";
import {
  faAngleDoubleUp,
  faBookOpen,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const incard = [
  {
    l: faAngleDoubleUp,
    h1: "Mission",
    p1:
      "Working towards the improvement of campus's coding culture by organizing regular coding classes,coding contests and geeky sessions",
  },
  {
    l: faBookOpen,
    h1: "Value",
    p1:
      "We believe that helping each other is the only way. We take care and always look to get the best out of everyone.",
  },
  {
    l: faIdBadge,
    h1: "Vision",
    p1:
      "To grow as a strong community in the world of coding, to make impact in various fields and uphold the integrity of IIIT Nagpur as a technical institution.",
  },
];

const InfoCards = (props) => {
  return (
    <Jumbotron style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <hr />
        <h3 style={{ textAlign: "center" }}>Who we are?</h3>
        <hr />
        <Row>
          {incard.map((a, i) => (
            <Col>
              <div class="wrapper1">
                <Card className="cardd">
                  <div class="card-info">
                    <FontAwesomeIcon icon={a.l} className="icon-icon" />
                    <h3>{a.h1}</h3>
                    <p>{a.p1}</p>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default InfoCards;
