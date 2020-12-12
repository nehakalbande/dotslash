import React from "react";
import HomeCorosel from "../Template/Card";
import { Container, Row, Col } from "reactstrap";
import logo1 from "./sponsorslogo/codechef.jpg";
import logo2 from "./sponsorslogo/codingninjas.png";
import logo3 from "./sponsorslogo/gfg.png";
import logo4 from "./sponsorslogo/hackerearth.png";
import logo5 from "./sponsorslogo/hackkerrank.png";
import "./Sponsors.css";

const cont = [
  {
    comp: "https://www.codechef.com/node",
    l: logo1,
  },
  {
    comp: "https://www.codingninjas.com/",
    l: logo2,
  },
  {
    comp: "https://www.geeksforgeeks.org/",
    l: logo3,
  },
  {
    comp: "https://www.hackerearth.com/",
    l: logo4,
  },
  {
    comp: "https://www.hackerrank.com/",
    l: logo5,
  },
];

const Sponsors = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <HomeCorosel></HomeCorosel>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <br />
      <p className="text-center">
        {" "}
        <h4>Sponsors</h4>
      </p>
      <Row>
        <Col>
          <center>
            {cont.map((b, i) => (
              <a href={b.comp}>
                <img className="sponsorImg" width="160px" src={b.l}></img>
              </a>
            ))}
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Sponsors;
